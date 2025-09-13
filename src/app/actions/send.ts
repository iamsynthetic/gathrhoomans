import EmailTemplate from "@/app/components/reactemail/email";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

type Tag = {
  name: string;
  value: string;
};

interface Props {
  from: string;
  to: string | string[];
  bcc?: string | string[];
  cc?: string | string[];
  html?: string;
  replyTo?: string;
  subject: string;
  addImage?: string;
  welcomeMessage?: string;
  content?: string;
  ctalabel?: string;
  ctaurl?: string;
  headers?: Record<string, string>;
  attachments?: {
    filename: string;
    content: string; // base64 encoded
    type?: string;
  }[];
  tags?: Tag[];
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function send(request: NextRequest): Promise<Response> {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: Props;

  try {
    body = await request.json();
  } catch (error) {
    console.error("Invalid JSON body:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Invalid request body" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const {
    from,
    to,
    bcc,
    cc,
    replyTo,
    subject,
    addImage,
    welcomeMessage,
    content,
    ctalabel,
    ctaurl,
    headers,
    attachments,
    tags,
  } = body;

  if (!from || !to || !subject || !content) {
    return new Response(
      JSON.stringify({ success: false, message: "Missing required fields" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // --- RSVP Token Logic ---
  let confirmUrl: string | undefined;
  let denyUrl: string | undefined;
  let token: string | undefined;

  if (Array.isArray(to) && to.length === 1) {
    token = randomUUID();
    console.log("token is: " + token);

    const { error: supabaseError } = await supabase.from("rsvp_tokens").insert({
      email: to[0],
      token,
      action: null,
      used: false,
    });

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Database error: " + supabaseError.message,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    confirmUrl = `http://localhost:3000/attending?action=confirm&token=${token}`;
    denyUrl = `http://localhost:3000/attending?action=deny&token=${token}`;
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      bcc,
      cc,
      subject: subject!,
      replyTo,
      headers,
      attachments,
      tags,
      react: EmailTemplate({
        addImage,
        welcomeMessage: welcomeMessage!,
        content: content!,
        ctalabel,
        ctaurl,
        confirmbuttonalabel: "Confirm Attendance",
        confirmbuttonurl: confirmUrl,
        denybuttonlabel: "Decline Attendance",
        denybuttonurl: denyUrl,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ success: false, message: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    }

    return new Response(
      JSON.stringify({
        success: false,
        message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

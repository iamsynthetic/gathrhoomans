"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
// import { useSharedValue } from '@/lib/store';
import styled from "styled-components";
import ButtonPill from "@/app/components/buttons/ButtonPill";
// import gsap from "gsap";
//

const TITLE = styled.div`
  font-family: var(--font-work-sans);
  font-weight: 800;
  color: black;
  font-size: 2rem;
  padding: 0rem 2rem 0.5rem 2rem;
`;

const SUBTITLE = styled.div`
  font-family: var(--font-space-mono);
  color: black;
  font-size: 0.875rem;
  padding: 0rem 0rem 0rem 2rem;
`;

const EMAILINPUT = styled.input`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: var(--color-background);
  border: none;
  outline: none;
  font-size: 1rem;
  /*padding: 0rem 0rem 0rem 0.5rem;
  width: 100%;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;*/
`;

const EMAILMESSAGE = styled.textarea`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: var(--color-background);
  border: none;
  outline: none;
  font-size: 1rem;
  /*border-none outline-hidden*/
  /*font-size: 1rem;
  padding: 0rem 0rem 0rem 0.5rem;
  width: 40rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;*/
`;

interface EmailData {
  from: string;
  to?: [];
  bcc?: [];
  replyTo?: string;
  subject?: string;
  addImage?: string;
  welcomeMessage?: string;
  content?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const WriteEmail = () => {
  const router = useRouter();
  const [data, setData] = useState<EmailData>({
    from: "chris@tomotsugu.me",
    to: [],
    bcc: [],
    replyTo: "chris@tomotsugu.me",
    subject: "",
    addImage: "",
    welcomeMessage: "",
    content: "",
    ctaLabel: "",
    ctaUrl: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "to" || name === "bcc") {
      const converttoarray = value.split(",").map((email) => email.trim());
      setData((prev) => ({
        ...prev,
        [name]: converttoarray,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const sendEmail = async () => {
    const {
      from,
      to,
      // bcc,
      subject,
      // addImage,
      welcomeMessage,
      // content,
      // ctaLabel,
      // ctaUrl,
    } = data;
    if (
      !from ||
      !to ||
      // !bcc ||
      !subject ||
      // !addImage ||
      !welcomeMessage
      // !content ||
      // !ctaLabel ||
      // !ctaUrl
    ) {
      alert("please enter from, to, subject, addImage, and content");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let message = "failed to send email";
        try {
          const resBody = await response.json();
          message = resBody.message || message;
        } catch {}
        throw new Error(message);
      }

      // const resBody = await response.json();
      // console.log("Email sent:", resBody);
      router.refresh();
      // } catch (error) {
      // const message = error instanceof Error ? error.message : String(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className=" w-full h-full rounded-t-4xl py-26"
      style={{ backgroundImage: "var(--gradient)" }}
    >
      <TITLE>EMAIL CLIENT</TITLE>
      <SUBTITLE className="font-[700]">PUB DEV PIT II</SUBTITLE>
      <SUBTITLE className="font-[400]">September 18, 2025</SUBTITLE>
      <div className="px-8 pt-10">
        <div className="rounded-xl w-full px-2 py-2 bg-[var(--colordarkgrey)]">
          <p className="[font-family:var(--font-work-sans)] font-[800] text-black">
            MESSAGE
          </p>
        </div>
      </div>
      <div className="px-8 pt-4">
        <div className="rounded-xl w-full h-full px-2 py-2 bg-[var(--coloroffwhite)]">
          <EMAILINPUT
            name="from"
            type="text"
            placeholder="From:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)] border-none outline-hidden"
            value={data.from}
            onChange={handleChange}
          />

          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="to"
            type="text"
            placeholder="To:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)] w-full"
            value={data.to}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="bcc"
            type="text"
            placeholder="Bcc:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            value={data.bcc}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="replyTo"
            type="text"
            placeholder="Reply To:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            value={data.replyTo}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="subject"
            type="text"
            placeholder="Subject:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]  w-full"
            value={data.subject}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="addImage"
            type="text"
            placeholder="Add Image:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]  w-full"
            value={data.addImage}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="welcomeMessage"
            type="text"
            placeholder="Welcome Message:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]  w-full"
            value={data.welcomeMessage}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="ctaLabel"
            type="text"
            placeholder="Add Link Label:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]  w-full"
            value={data.ctaLabel}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILINPUT
            name="ctaUrl"
            type="text"
            placeholder="Add Link URL:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]  w-full"
            value={data.ctaUrl}
            onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <EMAILMESSAGE
            name="content"
            placeholder="Message"
            className="h-[200px] [font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)] w-full"
            value={data.content}
            onChange={handleChange}
          />
          <div onClick={sendEmail}>
            <ButtonPill
              label={loading ? "Loading..." : "SEND"}
              paddingx="2rem"
              thefontsize=".85rem"
              loading={loading}
              bgcolor={loading ? "var(--coloroffwhite)" : "var(--blue)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteEmail;

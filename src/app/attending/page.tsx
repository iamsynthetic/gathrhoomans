import { createServiceClient } from "@/utils/supabase/service-client";
import { notFound } from "next/navigation";
import ConfirmAttending from "@/app/components/ConfirmAttending";

export default async function Attending({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { token, action } = searchParams;

  if (!token || !action || !["confirm", "deny"].includes(action)) {
    return notFound();
  }

  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("rsvp_tokens")
    .select("*")
    .eq("token", token)
    .single();

  console.log("Supabase data:", data);
  console.log("Supabase error:", error);

  if (!data) {
    return <div>theres no data here</div>;
  }

  await supabase
    .from("rsvp_tokens")
    .update({ used: true, action, used_at: new Date().toISOString() })
    .eq("id", data.id);
  return <ConfirmAttending action={action} email={data.email} />;
}

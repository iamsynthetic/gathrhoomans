import { createServiceClient } from "@/utils/supabase/service-client";
import { notFound } from "next/navigation";
import ConfirmAttending from "@/app/components/ConfirmAttending";

// type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// interface PageProps {
//   searchParams?: {
//     token?: string;
//     action?: string;
//   };
// }

// export default async function MyPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }>; }) {
//   const sParams = await searchParams;
//   // Now you can safely access properties from sParams, e.g., sParams.myQueryParam
// }

export default async function AttendingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sParams = await searchParams;
  const token = sParams?.token;
  const action = sParams?.action;

  if (!token || !action || !["confirm", "deny"].includes(action?.toString())) {
    return notFound();
  }

  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("rsvp_tokens")
    .select("*")
    .eq("token", token)
    .single();

  if (!data || error) {
    console.error("Supabase error:", error);
    return <div>There’s no data here</div>;
  }

  await supabase
    .from("rsvp_tokens")
    .update({ used: true, action, used_at: new Date().toISOString() })
    .eq("id", data.id);

  return <ConfirmAttending action={action.toString()} email={data.email} />;
}

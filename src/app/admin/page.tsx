import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { createServiceClient } from "@/utils/supabase/service-client";
import AdminHome from "@/app/admin/AdminHome";

export default async function AdminPage() {
  const supabase = await createClient();
  const serviceclient = createServiceClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await serviceclient
    .from("rsvp_tokens")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div>failed to load rsvps</div>;
  }

  if (!session) {
    redirect("/login");
  }

  return <AdminHome data={data || []} />;
}

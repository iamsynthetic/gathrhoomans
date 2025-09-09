import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import AdminHome from "@/app/admin/AdminHome";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return <AdminHome />;
}

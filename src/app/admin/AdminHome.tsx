"use client";
import { useEffect } from "react";
// import { supabase } from "@/utils/supabase/client";
// import { createServiceClient } from "@/utils/supabase/service-client";
// import { useButtonState } from "@/lib/store";
import { useButtonState, useRsvpStore, rsvpToken } from "@/lib/store";
import MainNav from "@/app/components/MainNav";
// import Email from "@/app/components/reactemail/email";
import MonitorDB from "@/app/components/MonitorDB";
import WriteEmail from "@/app/components/WriteEmail";

interface rsvp {
  id: string;
  name?: string;
  title: string;
  email: string;
  action: string;
  created_at: string;
}

interface rsvpProps {
  data: rsvp[];
}

const AdminRSVPTable = ({ data }: rsvpProps) => {
  const { isActive } = useButtonState();
  const setRsvps = useRsvpStore((s) => s.setRsvps);

  useEffect(() => {
    setRsvps(data as rsvpToken[]);
  }, [data, setRsvps]);
  // const supabase = createServiceClient();
  // const { data, error } = await supabase
  //   .from("rsvp_tokens")
  //   .select("*")
  //   .order("created_at", { ascending: false });

  // if (error) {
  //   console.log("error fetching rsvp tokens: ", error);
  //   return <div>failed to load rsvps</div>;
  // }
  // useEffect(() => {
  //   const fetchRsvps = async () => {
  //     const { data, error } = await supabase
  //       .from("rsvp_tokens")
  //       .select("*")
  //       .order("created_at", { ascending: false });

  //     if (error) {
  //       console.error("Error fetching RSVPs:", error);
  //     } else {
  //       console.log("Fetched RSVPs:", data);
  //       setRsvps(data as rsvpToken[]);
  //     }
  //   };

  //   fetchRsvps();
  // }, [setRsvps]);

  return (
    <>
      <MainNav />
      {/*{isActive === "btn1" && <Email />}*/}
      {isActive === "btn2" && <MonitorDB />}
      {isActive === "btn3" && <WriteEmail />}
      {/*<MonitorDB />*/}
    </>
  );
};

export default AdminRSVPTable;

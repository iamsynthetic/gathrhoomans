"use client";
import { useEffect } from "react";
import { useButtonState, useRsvpStore, rsvpToken } from "@/lib/store";
import MainNav from "@/app/components/MainNav";
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

  return (
    <>
      <MainNav />
      {isActive === "btn2" && <MonitorDB />}
      {isActive === "btn3" && <WriteEmail />}
    </>
  );
};

export default AdminRSVPTable;

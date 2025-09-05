"use client";
import MainNav from "@/app/components/MainNav";
import MonitorDB from "@/app/components/MonitorDB";
import WriteEmail from "@/app/components/WriteEmail";
import { useButtonState } from "@/lib/store";

export default function Home() {
  const { isActive } = useButtonState();

  return (
    <>
      <MainNav />
      {isActive === "btn2" && <MonitorDB />}
      {isActive === "btn3" && <WriteEmail />}
    </>
  );
}

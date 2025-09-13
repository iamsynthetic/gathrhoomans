"use client";
import React from "react";
import Image from "next/image";

interface Props {
  action: string;
  email: string;
}

export default function ConfirmAttending({ action }: Props) {
  const renderConfirmedPage = () => (
    <div className="text-red-300">
      <div>
        <Image
          src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/confirm-header.png"
          width={498}
          height={456}
          alt="save the date pub dev pit - hero image with a pig"
        />
      </div>
      <h1>thanks for confirming!</h1>
      <p>see you there on Thursday</p>
    </div>
  );

  const renderDeniedPage = () => (
    <div className="text-red-300">
      <div>
        <Image
          src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/deny-header.png"
          width={498}
          height={456}
          alt="save the date pub dev pit - hero image with a pig"
        />
      </div>
      <h1>Ah sorry you can't make it :(</h1>
      <p>Maybe next time.</p>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-black">
      {action === "confirm" ? renderConfirmedPage() : renderDeniedPage()}
    </div>
  );
}

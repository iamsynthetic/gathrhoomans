"use client";
import { useState } from "react";
import Image from "next/image";
// import ConfirmAttending from "@/app/components/ConfirmAttending";

// const DIALOGBOX = styled.form`
//   width: 26rem;
//   height: 19rem;
//   border-radius: 1rem;
//   padding: 2rem 2rem 2rem 2rem;
//   background-color: var(--coloroffwhite);
//   color: var(--black);
// `;

// const TITLE = styled.div`
//   font-family: var(--font-work-sans);
//   font-weight: 800;
//   color: black;
//   font-size: 1.75rem;
//   text-align: center;
//   margin-bottom: 0.5rem;
// `;

// const LABEL = styled.div`
//   font-family: var(--font-space-mono);
//   font-weight: 400;
//   color: black;
//   font-size: 1rem;
//   text-align: left;
//   margin-bottom: 0.5rem;
// `;

// const TEXTINPUT = styled.input`
//   font-family: var(--font-space-mono);
//   font-weight: 400;
//   color: black;
//   font-size: 1rem;
//   display: flex;
//   flex-direction: justify-center;
//   text-align: left;
//   padding: 0.25rem 0rem 0.25rem 0.5rem;
//   margin-bottom: 1rem;
//   border-radius: 0.75rem;
//   border: 1px solid var(--colordarkgrey);
//   background-color: var(--foreground);

//   &:-webkit-autofill,
//   &:-webkit-autofill:focus,
//   &:-webkit-autofill:hover,
//   &:-webkit-autofill:active {
//     box-shadow: 0 0 0px 1000px var(--foreground) inset !important;
//     -webkit-text-fill-color: black !important;
//     transition: background-color 5000s ease-in-out 0s;
//   }
// `;

// const LOGIN = styled.button`
//   font-family: var(--font-space-mono);
//   font-weight: 400;
//   color: black;
//   font-size: 0.85rem;
//   display: flex;
//   flex-direction: justify-center;
//   text-align: center;
//   border-radius: 1rem;
//   padding: 0.25rem 1rem 0.25rem 1rem;
//   margin-top: 0.5rem;
//   background-color: var(--blue);
//   cursor: pointer;
// `;

// const ERRORMESSAGE = styled.div`
//   font-family: var(--font-space-mono);
//   font-weight: 800;
//   color: var(--red);
//   font-size: 0.85rem;
//   text-align: center;
//   margin-top: 1rem;
// `;

export default function AttendingTest() {
  const [isConfirm, setisConfirm] = useState(false);

  const onHoverIn = () => {
    gsap.to(`#loginbtn`, {
      backgroundColor: "#e8ffb7",
      duration: 0.2,
    });
  };

  const onHoverOut = () => {
    gsap.to(`#loginbtn`, {
      backgroundColor: "#76e5fc",
      duration: 0.2,
    });
  };

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
      {isConfirm === true ? renderConfirmedPage() : renderDeniedPage()}
    </div>
  );
}

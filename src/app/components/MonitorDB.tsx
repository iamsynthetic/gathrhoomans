import styled from "styled-components";
// import gsap from "gsap";

// const CircleButton = styled.button`
//   font-family: var(--font-space-mono);
//   font-weight: 700;
//   color: black;
//   font-size: 0.875rem;
//   background-color: #b6bfc8;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   width: 2.5rem;
//   height: 2.5rem;
//   cursor: pointer;
// `;
//
const TITLE = styled.div`
  font-family: var(--font-work-sans);
  font-weight: 800;
  color: black;
  font-size: 2rem;
  padding: 6rem 2rem 0.5rem 2rem;
`;

const SUBTITLE = styled.div`
  font-family: var(--font-space-mono);
  /*font-weight: 400;*/
  color: black;
  font-size: 0.875rem;
  /*padding: 0.5rem 1rem 0 2rem;*/
  padding: 0rem 0rem 0rem 2rem;
`;

const MonitorDB = () => {
  return (
    <div
      className=" w-full h-[calc(100vh-96px)] rounded-t-4xl py-8"
      style={{ backgroundImage: "var(--gradient)" }}
    >
      <TITLE>DATABASE</TITLE>
      <SUBTITLE className="font-[700]">PUB DEV PIT II</SUBTITLE>
      <SUBTITLE className="font-[400]">September 18, 2025</SUBTITLE>
    </div>
  );
};

export default MonitorDB;

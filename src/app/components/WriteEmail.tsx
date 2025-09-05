import styled from "styled-components";
// import gsap from "gsap";

const TITLE = styled.div`
  font-family: var(--font-work-sans);
  font-weight: 800;
  color: black;
  font-size: 2rem;
  padding: 6rem 2rem 0.5rem 2rem;
`;

const SUBTITLE = styled.div`
  font-family: var(--font-space-mono);
  color: black;
  font-size: 0.875rem;
  padding: 0rem 0rem 0rem 2rem;
`;

const WriteEamil = () => {
  return (
    <div
      className=" w-full h-[calc(100vh-96px)] rounded-t-4xl py-8"
      style={{ backgroundImage: "var(--gradient)" }}
    >
      <TITLE>EMAIL CLIENT</TITLE>
      <SUBTITLE className="font-[700]">PUB DEV PIT II</SUBTITLE>
      <SUBTITLE className="font-[400]">September 18, 2025</SUBTITLE>
      <div className="px-8 pt-10">
        <div className="rounded-xl w-full px-2 py-2 bg-[var(--colordarkgrey)]">
          <p className="[font-family:var(--font-work-sans)] font-[800] text-black">
            MESSAGE
          </p>
        </div>
      </div>
      <div className="px-8 pt-4">
        <div className="rounded-xl w-full h-[calc(100vh-30rem)] px-2 py-2 bg-[var(--colordarkgrey)]">
          email sender
        </div>
      </div>
    </div>
  );
};

export default WriteEamil;

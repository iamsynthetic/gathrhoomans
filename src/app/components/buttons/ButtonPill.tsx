"use client";
import styled from "styled-components";
import gsap from "gsap";

interface Props {
  label?: string;
}

const PillButton = styled.button`
  font-family: var(--font-space-mono);
  font-weight: 700;
  color: black;
  font-size: 0.875rem;
  background-color: #76e5fc;
  border: 1px solid var(--border-color);
  padding: 0.5rem;
  border-radius: 1rem;
  width: 14rem;
  cursor: pointer;
`;

const onHoverIn = () => {
  gsap.to("#button1", {
    backgroundColor: "#e8ffb7",
    duration: 0.4,
  });
};

const onHoverOut = () => {
  gsap.to("#button1", {
    backgroundColor: "#76e5fc",
    duration: 0.4,
  });
};

const ButtonPill = ({ label = "SEND" }: Props) => {
  return (
    <>
      <PillButton
        id="button1"
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        {label}
      </PillButton>
    </>
  );
};

export default ButtonPill;

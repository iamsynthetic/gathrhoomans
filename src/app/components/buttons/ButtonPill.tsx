"use client";
import styled from "styled-components";
import gsap from "gsap";

interface Props {
  label?: string;
  paddingx?: string;
  bgcolor?: string;
  fontsize?: string;
  loading?: boolean;
}

const PillButton = styled.button<Props>`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: black;
  font-size: ${({ fontsize }) => fontsize};
  display: flex;
  flex-direction: justify-center;
  text-align: center;
  border-radius: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: ${({ paddingx }) => paddingx};
  padding-right: ${({ paddingx }) => paddingx};
  background-color: ${({ bgcolor }) => bgcolor};
  margin-top: 0.5rem;
  /*background-color: var(--blue);*/
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

const ButtonPill = ({
  label = "SEND",
  paddingx = "px-2",
  bgcolor = "var(--blue)",
  fontsize = ".75rem",
  loading = false,
}: Props) => {
  return (
    <>
      <PillButton
        id="button1"
        paddingx={paddingx}
        bgcolor={bgcolor}
        fontsize={fontsize}
        disabled={loading}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        {label}
      </PillButton>
    </>
  );
};

export default ButtonPill;

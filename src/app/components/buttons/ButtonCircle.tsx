"use client";
import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useButtonState } from "@/lib/store";
import { PiHouseSimpleFill } from "react-icons/pi";
import { AiFillDatabase } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

interface Props {
  id?: string;
  label?: string;
}

const CircleButton = styled.button`
  font-family: var(--font-space-mono);
  font-weight: 700;
  color: black;
  font-size: 0.875rem;
  background-color: #b6bfc8;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const ButtonCircle = ({ id, label = "SEND" }: Props) => {
  const localId = id;
  const { isActive, setActiveButton } = useButtonState();

  const onHoverIn = (id?: string) => {
    if (isActive !== localId) {
      gsap.to(`#${id}`, {
        backgroundColor: "#e8ffb7",
        duration: 0.4,
      });
    }
  };

  const onHoverOut = (id?: string) => {
    if (isActive !== localId) {
      gsap.to(`#${id}`, {
        backgroundColor: "#b6bfc8",
        duration: 0.4,
      });
    }
  };

  useEffect(() => {
    if (isActive !== localId) {
      gsap.to(`#${id}`, {
        backgroundColor: "#b6bfc8",
        duration: 0.4,
      });
    } else {
      gsap.to(`#${id}`, {
        backgroundColor: "#e8ffb7",
        duration: 0.4,
      });
    }
  }, [id, localId, isActive]);

  return (
    <>
      <CircleButton
        id={id}
        onMouseEnter={() => onHoverIn(id)}
        onMouseLeave={() => onHoverOut(id)}
        onClick={() => {
          setActiveButton(String(id));
        }}
      >
        {id === "btn1" && <PiHouseSimpleFill size={20} />}
        {id === "btn2" && <AiFillDatabase size={20} />}
        {id === "btn3" && <BsPencilSquare size={20} />}
      </CircleButton>
    </>
  );
};

export default ButtonCircle;

"use client";
import styled from "styled-components";
import gsap from "gsap";
// import { useActionState } from 'react';
import { useEffect, useState } from "react";

const DIALOGBOX = styled.form`
  width: 26rem;
  height: 19rem;
  border-radius: 1rem;
  padding: 2rem 2rem 2rem 2rem;
  background-color: var(--coloroffwhite);
  color: var(--black);
`;

const TITLE = styled.div`
  font-family: var(--font-work-sans);
  font-weight: 800;
  color: black;
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const LABEL = styled.div`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: black;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const TEXTINPUT = styled.input`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: black;
  font-size: 1rem;
  display: flex;
  flex-direction: justify-center;
  text-align: left;
  padding: 0.25rem 0rem 0.25rem 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--colordarkgrey);
  background-color: var(--foreground);

  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px var(--foreground) inset !important;
    -webkit-text-fill-color: black !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const LOGIN = styled.button`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: black;
  font-size: 0.85rem;
  display: flex;
  flex-direction: justify-center;
  text-align: center;
  border-radius: 1rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  margin-top: 0.5rem;
  background-color: var(--blue);
  cursor: pointer;
`;

export default function Login() {
  const [isReady, setIsReady] = useState(false);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <DIALOGBOX>
        <TITLE>ADMIN LOGIN</TITLE>
        <div className="flex flex-col justify-center px-3">
          <LABEL>Email</LABEL>
          <TEXTINPUT
            id="email"
            name="email"
            type="email"
            placeholder="your email"
            autoComplete="off"
            list="autocompleteOff"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "your email")}
            required
          />
        </div>
        <div className="flex flex-col justify-center px-3">
          <LABEL>Password</LABEL>
          <TEXTINPUT
            id="password"
            name="password"
            type="password"
            placeholder="your password"
            autoComplete="hidden"
            list="autocompleteOff"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "your password")}
            required
          />
        </div>

        {/* error state */}
        <div className="flex justify-center">
          <LOGIN
            id="loginbtn"
            type="submit"
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            LOGIN
          </LOGIN>
        </div>
      </DIALOGBOX>
    </div>
  );
}

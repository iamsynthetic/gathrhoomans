"use client";
import ButtonCircle from "@/app/components/buttons/ButtonCircle";
import ButtonPill from "@/app/components/buttons/ButtonPill";
import ProfileAvatar from "@/app/components/ProfileAvatar";
import { signOut } from "@/app/actions/auth";
import styled from "styled-components";

const Logo = styled.button`
  font-family: var(--font-work-sans);
  font-weight: 800;
  color: black;
  font-size: 1rem;
`;

const UserName = styled.button`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: black;
  font-size: 1rem;
`;

const MainNav = () => {
  return (
    <div className="w-full px-8 py-7">
      <div className="grid grid-cols-3 place-content-center">
        <div className="h-10 flex justify-start items-center">
          <Logo>GATHR_HOOMANS</Logo>
        </div>
        <div className="h-10 flex justify-center items-center">
          <div className="flex">
            <div className="btn1 px-[2.5rem]">
              <ButtonCircle id="btn1" />
            </div>
            <div className="btn2 px-[2.5rem]">
              <ButtonCircle id="btn2" />
            </div>
            <div className="btn3 px-[2.5rem]">
              <ButtonCircle id="btn3" />
            </div>
          </div>
        </div>
        <div className="h-10 flex justify-end items-center">
          <UserName className="pr-6">Chris</UserName>
          <ProfileAvatar />
          <form action={signOut} className="ml-6 h-10">
            <ButtonPill label="SIGN OUT" paddingx=".5rem" fontsize=".625rem" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainNav;

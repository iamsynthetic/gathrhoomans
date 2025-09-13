"use client";
import { useRsvpStore } from "@/lib/store";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const SEARCHBAR = styled.div`
  width: 40rem;
  border-radius: var(--radius-3xl);
  border: 1px solid var(--colordarkgrey);
  padding: 0rem 0.5rem 0rem 0.5rem;
  display: flex;
  flex-direction: row;
`;
const SEARCHICON = styled.div`
  display: flex;
  padding-top: 0.5rem;
  color: var(--colordarkgrey);
`;
const SEARCH = styled.input`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: var(--colordarkgrey);
  font-size: 1rem;
  padding: 0rem 0rem 0rem 0.5rem;
  width: 40rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TITLE = styled.div`
  font-family: var(--font-work-sans);
  font-weight: 800;
  color: black;
  font-size: 2rem;
  padding: 0rem 2rem 0.5rem 2rem;
`;

const SUBTITLE = styled.div`
  font-family: var(--font-space-mono);
  color: black;
  font-size: 0.875rem;
  padding: 0rem 0rem 0rem 2rem;
`;

const TABLE = styled.div`
  font-family: var(--font-space-mono);
  font-weight: 400;
  color: black;
  font-size: 1rem;
  padding: 0rem 3rem 0rem 1rem;
  margin-top: 3.5rem;
`;

const MonitorDB = () => {
  const rsvps = useRsvpStore((s) => s.rsvps);
  const rsvpcategories = useRsvpStore((s) => s.rsvpcategories);
  console.log("RSVPs in component:", rsvps);

  return (
    <div
      className=" w-full h-full rounded-t-4xl py-8"
      style={{ backgroundImage: "var(--gradient)" }}
    >
      <div className="flex justify-center">
        <SEARCHBAR>
          <SEARCHICON>
            <CiSearch size="24" />
          </SEARCHICON>
          <SEARCH name="search" type="text" placeholder="Search" />
        </SEARCHBAR>
      </div>
      <div className="pt-8">
        <TITLE>DATABASE</TITLE>
        <SUBTITLE className="font-[700]">PUB DEV PIT II</SUBTITLE>
        <SUBTITLE className="font-[400]">September 18, 2025</SUBTITLE>
      </div>
      <TABLE>
        <div className="flex border-b border-transparent">
          {rsvpcategories.map((rsvpcategory, index) => (
            <div key={index} className="flex-1 px-4 font-semibold">
              {rsvpcategory}
            </div>
          ))}
        </div>
        <hr className="border-t-1 border-white mt-2 mb-4 mx-4" />
        <div className="flex">
          {rsvpcategories.map((category, colIndex) => (
            <div key={colIndex} className="flex-1 px-4">
              {rsvps.map((rsvp, rowIndex) => (
                <div id={`row-${rowIndex}`} key={rowIndex} className="py-1">
                  {rsvp[category as keyof typeof rsvp]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </TABLE>
    </div>
  );
};

export default MonitorDB;

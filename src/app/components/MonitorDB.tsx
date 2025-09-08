import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import gsap from "gsap";

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

const categories = ["Category A", "Category B", "Category C", "Category D"];
const items = [
  ["Item A1", "Item B1", "Item C1", "Item D1"],
  ["Item A2", "Item B2", "Item C2", "Item D2"],
  ["Item A3", "Item B3", "Item C3", "Item D3"],
  ["Item A4", "Item B4", "denied", "Item D4"],
  ["Item A5", "Item B5", "Item C5", "Item D5"],
  ["Item A6", "Item B6", "Item C6", "Item D6"],
  ["Item A7", "Item B7", "Item C7", "Item D7"],
  ["Item A8", "Item B8", "Item C8", "Item D8"],
  ["Item A9", "Item B9", "Item C9", "Item D9"],
  ["Item A10", "Item B10", "Item C10", "Item D10"],
];

const MonitorDB = () => {
  const onHoverIn = (id?: string) => {
    console.log("hover id is: " + id);
    console.log("typeof id is: " + typeof id);
    // if (isActive !== localId) {
    gsap.to(`#${id}`, {
      backgroundColor: "#dae4ee",
      // opacity: 0,
      duration: 0.2,
    });
    // }
  };

  const onHoverOut = (id?: string) => {
    console.log("id" + id);
    // alert("out id is: " + id);
    // if (isActive !== localId) {
    gsap.to(`#${id}`, {
      backgroundColor: "transparent",
      // opacity: 1,
      duration: 0.2,
    });
    // }
  };

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
          <SEARCH
            name="search"
            type="text"
            placeholder="Search"
            // value={data.from}
            // onChange={handleChange}
          />
        </SEARCHBAR>
      </div>
      <div className="pt-8">
        <TITLE>DATABASE</TITLE>
        <SUBTITLE className="font-[700]">PUB DEV PIT II</SUBTITLE>
        <SUBTITLE className="font-[400]">September 18, 2025</SUBTITLE>
      </div>

      <TABLE>
        <div className="flex border-b border-transparent">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex-1 px-4 font-semibold">
              {cat}
            </div>
          ))}
        </div>
        <hr className="border-t-1 border-white mt-2 mb-4 mx-4" />
        <div className="space-y-3">
          {items.map((row, rowIndex) => (
            <div
              key={rowIndex}
              id={`row-${rowIndex}`}
              className="flex rounded-2xl py-1 cursor-pointer"
              onMouseEnter={() => onHoverIn(`row-${rowIndex}`)}
              onMouseLeave={() => onHoverOut(`row-${rowIndex}`)}
            >
              {row.map((item, colIndex) => (
                <div key={colIndex} className="flex-1 px-4">
                  {item === "denied" ? (
                    <span className="rounded-2xl px-3 py-1 ml-[-.5rem] bg-[var(--red)]">
                      {item}
                    </span>
                  ) : (
                    <span>{item}</span>
                  )}
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

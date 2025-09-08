import styled from "styled-components";
// import gsap from "gsap";

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

const WriteEmail = () => {
  return (
    <div
      className=" w-full h-full rounded-t-4xl py-26"
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
        <div className="rounded-xl w-full h-full px-2 py-2 bg-[var(--coloroffwhite)]">
          <input
            name="from"
            type="text"
            placeholder="From:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />

          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="to"
            type="text"
            placeholder="To:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="bcc"
            type="text"
            placeholder="Bcc:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="reply_to"
            type="text"
            placeholder="Reply To:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="subject"
            type="text"
            placeholder="Subject:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="add_image"
            type="text"
            placeholder="Add Image:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="link_label"
            type="text"
            placeholder="Add Link Label:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <input
            name="link_url"
            type="text"
            placeholder="Add Link URL:"
            className="[font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            // value={data.from}
            // onChange={handleChange}
          />
          <hr className="my-2 border-t border-[var(--colormediumgrey)]" />
          <textarea
            name="content"
            placeholder="Message"
            className="w-full h-[200px] [font-family:var(--font-space-mono)] font-[400] text-[var(--color-background)]"
            //value={data.content}
            //onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WriteEmail;

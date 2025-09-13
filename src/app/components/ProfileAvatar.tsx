import Image from "next/image";
import styled from "styled-components";

const CircleAvatar = styled.button`
  font-family: var(--font-space-mono);
  font-weight: 700;
  color: black;
  font-size: 0.875rem;
  background-color: #b6bfc8;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const ProfileAvatar = () => {
  return (
    <>
      <CircleAvatar onClick={() => {}}>
        <Image
          src="/profile-image.png"
          alt="profile picture"
          width={40}
          height={37}
          style={{ objectFit: "cover" }}
        />
      </CircleAvatar>
    </>
  );
};

export default ProfileAvatar;

import { SkeletonDiv } from "../style/common.js";
import { styled } from "styled-components";

const UserInfokeleton = styled(SkeletonDiv)`
  width: 10rem;
  height: 4rem;
`;

const ImgSkeleton = styled(SkeletonDiv)`
  width: 4rem;
  height: 4rem;
`;

export const SkeletonContentCard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "15rem",
        justifyContent: "space-evenly",
      }}
    >
      <ImgSkeleton />
      <UserInfokeleton />
    </div>
  );
};

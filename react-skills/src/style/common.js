import { css, styled } from "styled-components";

const SkeletonAnimation = css`
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  -webkit-animation: skeleton-gradient 1s infinite ease-in-out;
  animation: skeleton-gradient 1s infinite ease-in-out;
`;

export const SkeletonDiv = styled.div`
  background-color: #999;
  border-radius: 4rem;
  ${SkeletonAnimation}
  width: ${(props) => (props.width ? props.width : "50px")}
`;

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Pop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  animation: ${rotate} 1.5s ease-in-out infinite;
  animation-direction: alternate;
  z-index: 1;
  margin: 24px;
  :hover {
    animation-play-state: paused;
  }
`;

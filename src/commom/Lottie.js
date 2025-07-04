import styled from 'styled-components';
import Lottie from "lottie-react";
import astronaut from "../Assets/Rotating.json";

const LottieWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  pointer-events: none;
  z-index: -1;
  mix-blend-mode: screen;
`;

export const Lotties = () => {
  return (
    <LottieWrapper>
      <Lottie
        animationData={astronaut}
        loop={true}
        autoplay={true}
      />
    </LottieWrapper>
  )
}

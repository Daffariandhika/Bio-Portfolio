import styled from 'styled-components';
import Lottie from "lottie-react";
import astronaut from "../Assets/Ast.json";

const LottieWrapper = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 480px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
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

import styled from 'styled-components';
import Lottie from "lottie-react";
import Orbiton from "../Assets/Rotating.json";

const OrbitWrapper = styled.div`
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

export const Orbit = () => {
  return (
    <OrbitWrapper>
      <Lottie
        animationData={Orbiton}
        loop={true}
        autoplay={true}
      />
    </OrbitWrapper>
  )
}

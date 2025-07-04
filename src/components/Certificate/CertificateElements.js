import styled from 'styled-components';

export const CertWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
	border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  min-height: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: fill;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #a5b4fc;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const CardBody = styled.div`
  flex-grow: 1;
  font-style: italic;
  color: #d1d5db;
  font-size: 0.85rem;
  text-align: justify;
  line-height: 1.5;
`;

export const BtnContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
`;

export const Footer = styled.div`
  margin-top: 1.2rem;
  font-size: 0.75rem;
  color: #a3a3a3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: italic;
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 0.75rem;
`;

export const Issuer = styled.span`
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  color: #8b5cf6;
`;

export const PopUp = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotateX: -5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

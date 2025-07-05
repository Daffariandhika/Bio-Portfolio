import styled from "@emotion/styled";

export const ProjectWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  -webkit-box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
	padding: 1rem;
	border-radius: 8px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
  
  @media (min-width: 864px) {
    grid-template-columns: 1fr 1fr;
  }

    @media (max-width: 864px) {
      grid-gap: 0.2rem;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 220px;
    border-radius: 12px;
    object-fit: contain;
    object-position: left center;
    transition: transform 0.4s ease;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  h4 {
    font-family: "Orbitron", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #a5b4fc;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 0.8rem;
    max-width: 95%;
    color: #cbd5e1;
    text-align: center;

    @media (min-width: 864px) {
      text-align: justify;
    }
  }

  @media (min-width: 864px) {
    align-items: flex-start;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 864px) {
    justify-content: flex-start;
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  @media (min-width: 864px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0.3em;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;

  img {
    object-fit: contain;
  }
`;

export const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
import styled from "@emotion/styled";

export const TechWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const TechCard = styled.div`
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  -webkit-box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
  padding: 1.5rem;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  margin-bottom: 5px;
`;

export const TechName = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
  margin: 0;
`;

export const techGridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const techCardVariants = {
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

import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 375px) {
    span {
      font-size: 0.80rem;
    }
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
    
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

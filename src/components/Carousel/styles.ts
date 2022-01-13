import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11.2rem;

  /* @media (max-width: 1200) {
    justify-content: unset;
  } */
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  height: 11.2rem;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

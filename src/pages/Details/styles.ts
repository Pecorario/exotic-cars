import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%);
  padding: 0 6.25%;
  padding-top: 8.5rem;
  height: 100vh;
  width: 100vw;

  @media (max-width: 860px) {
    padding-top: 10rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: auto;
  height: 7.6875rem;
`;

export const PriceAndModel = styled.div`
  margin-left: 2.4375rem;
`;

export const Title = styled.h1`
  font-family: 'Segoe UI Bold';
  font-size: 3.125rem;
  color: ${props => props.theme.colors.text_primary};
`;

export const Price = styled.p`
  font-family: 'Segoe UI Light';
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text_primary};
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
`;

export const Car = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Img = styled.img`
  height: 35vh;
  width: auto;

  @media (max-width: 480px) {
    height: 10vh;
  }

  /* @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 960px) {
    width: 30%;
    height: 12.5rem;
  }

  @media (min-width: 1200px) {
    margin: 1rem 0.5rem;

    width: 17.9375rem;
    height: 13.9375rem;
  } */
`;

export const TypeContainer = styled.div`
  position: absolute;
  right: 0;
  top: -2rem;
`;

export const Number = styled.h1`
  font-family: 'Segoe UI Bold';
  font-size: 3.125rem;
  color: ${props => props.theme.colors.text_primary};
`;

export const Color = styled.p`
  font-family: 'Segoe UI Light';
  font-size: 1.875rem;
  color: ${props => props.theme.colors.text_primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
  height: 32vh;
  width: auto;
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

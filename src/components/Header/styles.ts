import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 5.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background_primary};
  box-shadow: 0px 10px 30px #0000001a;
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TitleOne = styled.h1`
  font-family: 'Segoe UI Semi Bold';
  font-size: 1.5rem;
  margin-right: 0.2rem;
`;
export const TitleTwo = styled.h1`
  font-family: 'Segoe UI';
  font-size: 1rem;
`;

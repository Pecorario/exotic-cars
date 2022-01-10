import styled from 'styled-components';

export const Container = styled.div`
  background: pink;
  border-radius: 20px;
  padding: 1.25rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 1rem 0.5rem;
  width: 70%;

  @media (min-width: 480px) {
    width: 45%;
  }

  @media (min-width: 768px) {
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
  }
`;

export const Brand = styled.h2`
  font-family: 'Segoe UI Bold';
  font-size: 1.06rem;
`;

export const Model = styled.p`
  font-family: 'Segoe UI Light';
  font-size: 1.06rem;
  margin-bottom: 1rem;
`;

export const ImgAndPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 90%;
  align-self: center;
`;

export const Price = styled.p`
  font-family: 'Segoe UI Bold';
  font-size: 1.5rem;
  position: relative;
  align-self: flex-end;
  margin-right: 2.7rem;

  &:before {
    content: '$';
    font-family: 'Segoe UI Bold';
    font-size: 0.875rem;
    position: absolute;
    top: 0.2rem;
    left: -0.5rem;
  }

  &:after {
    content: '/day';
    font-family: 'Segoe UI Light';
    font-size: 0.875rem;
    position: absolute;
    bottom: -0.08rem;
  }
`;

import styled, { css } from 'styled-components';

interface StyledTypeProps {
  types: 'back' | 'forward';
}

export const Container = styled.button<StyledTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.text_primary};
  border-radius: 25px;
  box-shadow: 0px 5px 20px #0000001a;

  height: 3.125rem;
  width: 11.0625rem;

  font-family: 'Segoe UI Light';
  font-size: 1rem;

  ${props => (props.types === 'back' ? css`` : css``)}

  ${props =>
    props.types === 'back'
      ? css`
          color: ${props => props.theme.colors.text_primary};
        `
      : css`
          background: ${props => props.theme.colors.text_primary};
          color: white;
        `}

  & svg {
    font-size: 1rem;
    margin-top: 0.15rem;
    ${props =>
      props.types === 'back'
        ? css`
            margin-right: 0.725rem;
          `
        : css`
            margin-left: 0.725rem;
          `}
  }

  &:hover {
    ${props =>
      props.types === 'back'
        ? css`
            background: ${props => props.theme.colors.text_primary};
            color: white;
          `
        : css`
            color: ${props => props.theme.colors.text_primary};
            background: transparent;
          `}
  }
`;

export const Text = styled.p``;

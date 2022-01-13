import styled from 'styled-components';

export const Container = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
  background: ${props => props.theme.colors.text_primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 1.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

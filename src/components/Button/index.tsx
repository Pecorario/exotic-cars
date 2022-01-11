import { Container } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export interface ButtonProps {
  text: string;
  type: 'back' | 'forward';
  onClick: () => void;
}

export function Button({ text, onClick, type }: ButtonProps) {
  return (
    <Container onClick={onClick} types={type}>
      {type === 'forward' ? (
        <>
          {text}
          <BsArrowRight />
        </>
      ) : (
        <>
          <BsArrowLeft />
          {text}
        </>
      )}
    </Container>
  );
}

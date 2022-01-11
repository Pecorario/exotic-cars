import { Container } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { ButtonProps } from '@models/UIProps';

export function Button({ text, onClick, type }: ButtonProps) {
  return (
    <Container onClick={onClick} types={type}>
      {type === 'secondary' ? (
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

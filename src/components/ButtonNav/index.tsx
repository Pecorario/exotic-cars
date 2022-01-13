import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { ButtonProps } from '@models/UIProps';
import { Container } from './styles';

export function ButtonNav({ type, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {type === 'primary' ? <BsArrowLeft /> : <BsArrowRight />}
    </Container>
  );
}

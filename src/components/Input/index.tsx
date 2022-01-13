import { InputProps } from '@models/UIProps';
import { MdPlace } from 'react-icons/md';
import { IoCalendarSharp } from 'react-icons/io5';

import { Container, InputContent } from './styles';

export function Input({ type, width, icon }: InputProps) {
  return (
    <Container icon={icon}>
      {icon === 'local' ? <MdPlace /> : <IoCalendarSharp />}
      <InputContent type={type} icon={icon} />
    </Container>
  );
}

import { ButtonHeader } from '@components/ButtonHeader';
import { FaSearch } from 'react-icons/fa';

import {
  Container,
  Title,
  TitleOne,
  TitleTwo,
  ButtonsContainer,
  InputsContainer,
  Search
} from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        <TitleOne>EXOTIC</TitleOne>
        <TitleTwo>CARS</TitleTwo>
      </Title>
      <InputsContainer>
        <Search>
          <FaSearch />
        </Search>
      </InputsContainer>
      <ButtonsContainer>
        <ButtonHeader
          type="primary"
          text="Sign up"
          onClick={() => alert('Sign up!')}
        />
        <ButtonHeader
          type="secondary"
          text="Sign in"
          onClick={() => alert('Sign in!')}
        />
      </ButtonsContainer>
    </Container>
  );
}

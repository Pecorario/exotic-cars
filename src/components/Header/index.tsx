import { ButtonHeader } from '@components/ButtonHeader';
import { Input } from '@components/Input';

import { FaSearch } from 'react-icons/fa';

import {
  Container,
  Content,
  Title,
  TitleOne,
  TitleTwo,
  ButtonsContainer,
  InputsContainer,
  InputsContainerMobile,
  Search
} from './styles';

export function Header() {
  const date = new Date();
  const day = date.toLocaleString('pt-BR', { day: '2-digit' });
  const month = date.toLocaleString('pt-BR', { month: '2-digit' });
  const year = date.getFullYear();

  const today = `${year}-${month}-${day}`;
  return (
    <Container>
      <Content>
        <Title>
          <TitleOne>EXOTIC</TitleOne>
          <TitleTwo>CARS</TitleTwo>
        </Title>
        <InputsContainer>
          <Input type="text" icon="local" />
          <Input type="date" icon="date" value={today} />
          <Input type="date" icon="date" value={today} />
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
      </Content>
      <InputsContainerMobile>
        <Input type="text" icon="local" />
        <Input type="date" icon="date" value={today} />
        <Input type="date" icon="date" value={today} />
        <Search>
          <FaSearch />
        </Search>
      </InputsContainerMobile>
    </Container>
  );
}

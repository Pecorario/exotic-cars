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
  return (
    <Container>
      <Content>
        <Title>
          <TitleOne>EXOTIC</TitleOne>
          <TitleTwo>CARS</TitleTwo>
        </Title>
        <InputsContainer>
          <Input type="text" icon="local" width="40%" />
          <Input type="date" icon="date" width="25%" />
          <Input type="date" icon="date" width="25%" />
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
        <Input type="text" icon="local" width="40%" />
        <Input type="date" icon="date" width="25%" />
        <Input type="date" icon="date" width="25%" />
        <Search>
          <FaSearch />
        </Search>
      </InputsContainerMobile>
    </Container>
  );
}

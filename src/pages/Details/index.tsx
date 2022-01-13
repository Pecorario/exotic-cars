import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { CarProps, TypeProps } from '@models/CarsProps';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Container,
  Img,
  DetailsContainer,
  LogoImg,
  Price,
  PriceAndModel,
  Title,
  Middle,
  Car,
  TypeContainer,
  Number,
  Color,
  ButtonContainer
} from './styles';

export function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace(/[/]details[/]/, '');
  const cars = useSelector((state: RootStateOrAny) => state.cars.cars);
  const car = cars.find((car: CarProps) => car.id === +path);

  const type = car.types.find((type: TypeProps) => type.selected === true);

  const backHome = () => {
    navigate('/');
  };
  return (
    <Container>
      <DetailsContainer>
        <LogoImg src={car.logo} alt={car.brand} />
        <PriceAndModel>
          <Title>
            {car.brand} {car.model}
          </Title>
          <Price>${car.price}/day</Price>
        </PriceAndModel>
      </DetailsContainer>
      <Middle>
        <Button text="Back to catalog" type="primary" onClick={backHome} />
        <Car>
          <Img src={type.urlFrontView} alt={`${car.brand} ${car.model}`} />
          <TypeContainer>
            <Number>{type.number}</Number>
            <Color>{type.color}</Color>
          </TypeContainer>
        </Car>
      </Middle>
      <ButtonContainer>
        <Button text="Book now" type="secondary" onClick={backHome} />
      </ButtonContainer>
      <Carousel types={car.types} id={car.id} />
    </Container>
  );
}

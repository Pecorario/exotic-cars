import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchCarsData } from '@store/cars-actions';

import { Container, Title, ImgContainer, ImgContent, Imagem } from './styles';
import { CarProps } from '@models/CarsProps';

export function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootStateOrAny) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCarsData());
  }, [dispatch]);
  return (
    <Container>
      <Title>Home page</Title>
      <ImgContainer>
        {cars.map((car: CarProps) => {
          return (
            <ImgContent>
              <p>{car.brand}</p>
              <Imagem src={car.urlSideView} alt={car.model} />
            </ImgContent>
          );
        })}
      </ImgContainer>
    </Container>
  );
}

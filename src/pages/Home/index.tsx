import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchCarsData } from '@store/cars-actions';

import { Container, ImgContainer } from './styles';
import { CarProps } from '@models/CarsProps';
import { Header } from '@components/Header';
import { Card } from '@components/Card';

export function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootStateOrAny) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCarsData());
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <ImgContainer>
        {cars.map((car: CarProps) => {
          return (
            <Card
              url={car.urlSideView}
              brand={car.brand}
              model={car.model}
              price={car.price}
            />
          );
        })}
      </ImgContainer>
    </Container>
  );
}

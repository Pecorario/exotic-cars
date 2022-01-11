import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchCarsData } from '@store/cars-actions';

import { Container, ImgContainer } from './styles';
import { CarProps } from '@models/CarsProps';
import { Card } from '@components/Card';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars = useSelector((state: RootStateOrAny) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCarsData());
  }, [dispatch]);

  const selectCars = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <Container>
      <ImgContainer>
        {cars.map((car: CarProps) => {
          return (
            <Card
              key={car.id}
              types={car.types}
              brand={car.brand}
              model={car.model}
              price={car.price}
              onClick={() => selectCars(car.id)}
            />
          );
        })}
      </ImgContainer>
    </Container>
  );
}

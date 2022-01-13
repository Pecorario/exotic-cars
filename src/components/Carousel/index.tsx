import { ButtonNav } from '@components/ButtonNav';
import { CarouselItem } from '@components/CarouselItem';
import { TypeProps } from '@models/CarsProps';
import { carsActions } from '@store/cars-slice';
import { useDispatch } from 'react-redux';

import { Container, CarouselContainer } from './styles';

export function Carousel({ types, id }: any) {
  const dispatch = useDispatch();
  const selected = types.find((type: TypeProps) => type.selected === true);
  const numberActual = selected.number;

  const maxNumber = types.length;

  const nextType = () => {
    if (numberActual < maxNumber) {
      dispatch(carsActions.carouselNavigation({ id: id, type: 'forward' }));
    }
  };

  const backType = () => {
    if (numberActual > 1) {
      dispatch(carsActions.carouselNavigation({ id: id, type: 'back' }));
    }
  };
  return (
    <Container>
      <ButtonNav type="primary" onClick={backType} />
      <CarouselContainer>
        {types.map((type: any) => {
          return (
            <CarouselItem
              url={type.urlFrontView}
              selected={type.selected}
              number={type.number}
              id={id}
            />
          );
        })}
      </CarouselContainer>
      <ButtonNav type="secondary" onClick={nextType} />
    </Container>
  );
}

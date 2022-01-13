import { ButtonNav } from '@components/ButtonNav';
import { CarouselItem } from '@components/CarouselItem';

import { Container, CarouselContainer } from './styles';

export function Carousel({ types }: any) {
  console.log('Types: ', types);
  return (
    <Container>
      <ButtonNav type="primary" onClick={() => console.log('Back')} />
      <CarouselContainer>
        {/* {types.map((type: any) => {
          return <CarouselItem url={type.urlFrontView} selected={false} />;
        })} */}
        <CarouselItem url={types[0].urlFrontView} selected={false} />
        <CarouselItem url={types[1].urlFrontView} selected={false} />
        <CarouselItem url={types[2].urlFrontView} selected={true} />
      </CarouselContainer>
      <ButtonNav type="secondary" onClick={() => console.log('Forward')} />
    </Container>
  );
}

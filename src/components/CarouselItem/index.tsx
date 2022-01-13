import { Container, Img } from './styles';

export function CarouselItem({ url, selected }: any) {
  return (
    <Container selected={selected}>
      <Img src={url} />
    </Container>
  );
}

import {
  Container,
  KebabHorizontal,
  Brand,
  Model,
  Img,
  Price,
  ImgAndPrice
} from './styles';

export function Card({ url, brand, model, price }: any) {
  return (
    <Container>
      <KebabHorizontal />
      <div>
        <Brand>{brand}</Brand>
        <Model>{model.toUpperCase()}</Model>
      </div>
      <ImgAndPrice>
        <Img src={url} />
        <Price>{price}</Price>
      </ImgAndPrice>
    </Container>
  );
}

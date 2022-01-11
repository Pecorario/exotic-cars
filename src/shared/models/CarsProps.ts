export interface TypeProps {
  number: number;
  color: string;
  urlSideView: string;
  urlFrontView: string;
}

export interface CarProps {
  id: number;
  brand: string;
  model: string;
  logo: string;
  types: Array<TypeProps>;
  price: number;
}

export interface InitialStateProps {
  cars: CarProps[];
}

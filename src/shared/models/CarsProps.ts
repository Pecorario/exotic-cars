export interface CarProps {
  brand: string;
  model: string;
  color: string;
  price: number;
  urlSideView: string;
  urlFrontView?: string;
}

export interface InitialStateProps {
  cars: CarProps[];
}

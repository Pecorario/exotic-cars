import axios from 'axios';
import { Dispatch } from 'redux';
import { carsActions } from './cars-slice';
import { CarProps } from '@models/CarsProps';

export const fetchCarsData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`./cars.json`);
      const data = response.data.cars;

      const carsLoaded: CarProps[] = [];

      await data.map((car: CarProps) => {
        return carsLoaded.push({
          brand: car.brand,
          model: car.model,
          color: car.color,
          price: car.price,
          urlSideView: car.urlSideView
        });
      });

      dispatch(carsActions.addCars(carsLoaded));
    } catch (err) {
      console.log('Erro: ', err);
    }
  };
};

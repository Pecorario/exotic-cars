import { createSlice } from '@reduxjs/toolkit';
import { InitialStateProps } from '@models/CarsProps';

const initialState: InitialStateProps = {
  cars: []
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCars(state, action) {
      state.cars = action.payload;
      console.log('Carros: ', state.cars);
    }
  }
});

export const carsActions = carSlice.actions;

export default carSlice;

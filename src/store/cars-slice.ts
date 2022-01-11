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
      state.cars.sort(function (a, b) {
        return a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0;
      });
    }
  }
});

export const carsActions = carSlice.actions;

export default carSlice;

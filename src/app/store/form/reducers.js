import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const TIME_INTERVAL = 15;

const initialState = { duration: TIME_INTERVAL, plate: '', zone: '' };

export const formReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.reset, () => initialState)
    .addCase(actions.increment, (state) => {
      state.duration += TIME_INTERVAL;
    })
    .addCase(actions.decrement, (state) => {
      state.duration -= TIME_INTERVAL;
    })
    .addCase(actions.updatePlate, (state, action) => {
      state.plate = action.payload;
    })
    .addCase(actions.updateZone, (state, action) => {
      state.zone = action.payload;
    });
});

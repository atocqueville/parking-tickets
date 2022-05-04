import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './form/reducers';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

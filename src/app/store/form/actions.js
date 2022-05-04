import { createAction } from '@reduxjs/toolkit';

export const reset = createAction('form/reset');
export const increment = createAction('form/increment');
export const decrement = createAction('form/decrement');
export const updatePlate = createAction('form/updatePlate');
export const updateZone = createAction('form/updateZone');

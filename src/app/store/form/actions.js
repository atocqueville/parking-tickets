import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const updatePlate = createAction('counter/updatePlate')
export const updateZone = createAction('counter/updateZone')
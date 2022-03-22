import {configureStore, createReducer} from '@reduxjs/toolkit'
import {MEALS} from "../data/dummy-data";
import { State } from "../types";


const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
} as State


const mealsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('action', (state, action) => {})
})


export const store = configureStore({
  reducer: {
    meals: mealsReducer
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself:
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

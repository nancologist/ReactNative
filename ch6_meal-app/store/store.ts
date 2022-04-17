import {TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector} from 'react-redux'
import {configureStore, createReducer} from '@reduxjs/toolkit'
import {MEALS} from "../data/dummy-data";
import { State } from "../types";
import { addToFavorite } from './actions';


const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
} as State


const mealsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorite, (state, action) => {
      const mealId = action.payload
      const meal = state.meals.find(meal => meal.id === mealId)
      state.favoriteMeals = [...state.favoriteMeals, meal]
    })
})


export const store = configureStore({
  reducer: {
    mealsReducer
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }))
})


// Infer the `RootState` and `AppDispatch` types from the store itself:
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => _useDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector

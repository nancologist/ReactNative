import {TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector} from 'react-redux'
import {configureStore, createReducer} from '@reduxjs/toolkit'
import {MEALS} from "../data/dummy-data";
import { State } from "../types";
import { toggleFavorite } from './actions';


const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
} as State


const mealsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleFavorite, (state, action) => {
      const mealId = action.payload
      const mealAlreadyInFavorites = state.favoriteMeals.findIndex(meal => meal.id === mealId) > -1

      if (mealAlreadyInFavorites) {
        state.favoriteMeals = state.favoriteMeals.filter(meal => meal.id !== mealId)
      } else {
        const meal = state.meals.find(meal => meal.id === mealId)
        state.favoriteMeals = [...state.favoriteMeals, meal]
      }
    })
})


export const store = configureStore({
  reducer: {
    mealsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})


// Infer the `RootState` and `AppDispatch` types from the store itself:
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => _useDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector

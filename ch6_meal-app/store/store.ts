import {TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector} from 'react-redux'
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
    mealsReducer
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself:
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => _useDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector

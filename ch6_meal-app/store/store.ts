import {TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import {mealsReducer} from "./reducers";

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

import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

export const addToFavorite = createAction<string>('meal/addToFavorite')

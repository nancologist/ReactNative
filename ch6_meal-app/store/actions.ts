import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

export const toggleFavorite = createAction<string>('meal/addToFavorite')

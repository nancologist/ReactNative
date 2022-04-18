import { createAction } from '@reduxjs/toolkit'
import { Filter } from '../types'

export const toggleFavorite = createAction<string>('meal/addToFavorite')

export const setFilters = createAction<Filter>('meal/setFilters')

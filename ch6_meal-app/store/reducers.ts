import {createReducer} from "@reduxjs/toolkit";
import {toggleFavorite} from "./actions";
import {MEALS} from "../data/dummy-data";
import {State} from "../types";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
} as State

export const mealsReducer = createReducer(initialState, (builder) => {
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

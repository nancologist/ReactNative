import Meal from "./models/meal";

export interface State {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

export type Filter = {
  isGlutenFree: Boolean;
  isLactoseFree: Boolean;
  isVegetarian: Boolean;
  isVegan: Boolean;
}

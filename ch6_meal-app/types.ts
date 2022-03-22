import Meal from "./models/meal";

export interface State {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

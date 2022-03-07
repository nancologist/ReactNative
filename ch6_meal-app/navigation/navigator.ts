import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsByCategoryScreen from '../screens/MealsByCategoryScreen';
import MealScreen from "../screens/MealScreen";

const MealNavigator = createStackNavigator({
  Categories: CategoriesScreen, // simpled way
  MealsByCategory: { // detailed way
    screen: MealsByCategoryScreen
  },
  Meal: MealScreen
});

export default createAppContainer(MealNavigator);

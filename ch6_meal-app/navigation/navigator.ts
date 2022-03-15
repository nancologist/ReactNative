import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Color from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.primary : '' },
      headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary,
    },
    // OTHER OPTIONS:
    // mode: 'modal',
    // initialRouteName: 'SCREEN-NAME',
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealNavigator
  },
  Favorites: {
    screen: FavoritesScreen
  }
});

export default createAppContainer(MealsFavTabNavigator);

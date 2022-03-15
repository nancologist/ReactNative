import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Color from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

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

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              color={tabInfo.tintColor}
              name={'ios-restaurant'}
              size={25}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        // tabBarLabel: 'Favorites!',
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              color={tabInfo.tintColor}
              name={'ios-star'}
              size={25}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.accent
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Color from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import Meal from "../models/meal";
import {createDrawerNavigator} from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.primary : '' },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary,
}

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const tabScreenConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons
            color={tabInfo.tintColor}
            name={'ios-restaurant'}
            size={25}
          />
        );
      },
      tabBarColor: Color.primary // Works only on Android
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons
            color={tabInfo.tintColor}
            name={'ios-star'}
            size={25}
          />
        );
      },
      tabBarColor: Color.accent
    }
  }
}

let MealsFavTabNavigator = createBottomTabNavigator(
  tabScreenConfig,
  {
    tabBarOptions: {
      activeTintColor: Color.accent
    }
  }
);

if (Platform.OS === 'android') {
  MealsFavTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true // Tab grows, when active. And only active tab has Label
  });
}

// To have Filter in the Header:
const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
})

export default createAppContainer(MainNavigator);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform, Text} from "react-native";
import Color from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import Meal from "../models/meal";
import {createDrawerNavigator} from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";
import {StackNavigationOptions} from "react-navigation-stack/lib/typescript/src/vendor/types";

const defaultStackNavOptions: StackNavigationOptions = {
  headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.primary : '' },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle : {
    fontFamily: 'open-sans'
  },
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
      tabBarColor: Color.primary, // Works only on Android
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals'
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
      tabBarColor: Color.accent,
      tabBarLabel: Platform.OS === 'android' ?
        <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites'
    }
  }
}

let MealsFavTabNavigator = createBottomTabNavigator(
  tabScreenConfig,
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'open-sans-bold'
      },
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
}, {
  // navigationOptions: {
  //   drawerLabel: 'Filters!!!'
  // },
  defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Color.accent,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);

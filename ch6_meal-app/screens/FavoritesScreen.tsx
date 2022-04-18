import { Text, View, StyleSheet } from 'react-native';
import {NavigationStackScreenComponent} from "react-navigation-stack";
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import {useSelector} from "../store/store";

const FavoritesScreen: NavigationStackScreenComponent = (props) => {
  const favMeals = useSelector(state => state.mealsReducer.favoriteMeals)

  return (
    <>
      {favMeals.length > 0 ?
        <MealList
          listData={favMeals}
          navigation={props.navigation}
        /> : <Text>No favorite meal is stored.</Text>
      }
    </>
  )
};

FavoritesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: 'Your Favorites',

    headerLeft: () => {
      const openDrawer = () => {
        navData.navigation.toggleDrawer()
      };

      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title={'Menu'}
            iconName={'ios-menu'}
            onPress={openDrawer}
          />
        </HeaderButtons>
      )
    }
  };
}

export default FavoritesScreen;

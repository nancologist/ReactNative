import {
  Text, View, StyleSheet, Button, FlatList, ListRenderItem, TouchableOpacity,
} from 'react-native';
import { NavigationStackScreenComponent as NSSC } from 'react-navigation-stack';

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";

const CategoriesScreen: NSSC  = (props) => {

  const renderGridItem: ListRenderItem<Category> = (itemData) => {
    const category = itemData.item;

    const selectTile = () => {
      props.navigation.navigate({
        routeName: 'CategoryMeals',
        params: {
          categoryId: itemData.item.id
        }
      })
    };

    return <CategoryGridTile
      color={itemData.item.color}
      onSelect={selectTile}
      title={itemData.item.title}
    />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = (navData: any) => {
  const openDrawer = () => {
    navData.navigation.toggleDrawer();
  };
  return {
    headerLeft: () => {
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
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default CategoriesScreen;

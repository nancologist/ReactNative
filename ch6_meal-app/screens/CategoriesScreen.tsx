import {
  Text, View, StyleSheet, Button, FlatList, ListRenderItem, TouchableOpacity,
  Platform
} from 'react-native';
import { NavigationStackScreenComponent as NSSC } from 'react-navigation-stack';

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import Color from "../constants/Color";

const CategoriesScreen: NSSC  = (props) => {

  const renderGridItem: ListRenderItem<Category> = (itemData) => {
    const category = itemData.item
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
        style={styles.gridItem}
      >
        <View>
          <Text>{category.title}</Text>
        </View>
      </TouchableOpacity>
    )
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

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Color.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default CategoriesScreen;

import {Text, View, StyleSheet, Button, FlatList, ListRenderItem} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

type Props = {
  navigation: NavigationStackProp
};

const renderGridItem: ListRenderItem<Category> = (itemData) => {
  const category = itemData.item
  return (
    <View style={styles.gridItem}>
      <Text>{category.title}</Text>
    </View>
  )
};

const CategoriesScreen = (props: Props) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

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

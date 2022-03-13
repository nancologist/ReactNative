import {Text, View, StyleSheet, Button, Platform, FlatList, ListRenderItem} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import { NavigationStackScreenComponent as NSSC } from 'react-navigation-stack';
import Color from "../constants/Color";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

const CategoryMealsScreen: NSSC = (props) => {
  const renderMealItem: ListRenderItem<Meal> = itemData => {
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {}}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)!

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))

  const goToMeal = () => {
    props.navigation.navigate({
      routeName: 'MealDetail'
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ marginTop: 15, width: '90%' }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)!;

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default CategoryMealsScreen;

import { CATEGORIES } from "../data/dummy-data";
import { NavigationStackScreenComponent as NSSC } from 'react-navigation-stack';
import MealList from "../components/MealList";
import { useSelector } from "../store/store";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen: NSSC = (props) => {
  const availableMeals = useSelector(state => state.mealsReducer.filteredMeals)

  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)!
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.includes(catId))

  const goToMeal = () => {
    props.navigation.navigate({
      routeName: 'MealDetail'
    });
  };

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe check your filters?</DefaultText>
      </View>
    )
  }

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
    />
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;

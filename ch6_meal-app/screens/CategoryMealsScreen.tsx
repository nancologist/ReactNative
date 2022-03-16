import {CATEGORIES, MEALS} from "../data/dummy-data";
import { NavigationStackScreenComponent as NSSC } from 'react-navigation-stack';
import MealList from "../components/MealList";

const CategoryMealsScreen: NSSC = (props) => {

  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)!
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))

  const goToMeal = () => {
    props.navigation.navigate({
      routeName: 'MealDetail'
    });
  };

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

export default CategoryMealsScreen;

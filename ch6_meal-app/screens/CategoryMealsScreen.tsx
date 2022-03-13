import {Text, View, StyleSheet, Button, Platform} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import { NavigationStackScreenComponent as NSSC } from 'react-navigation-stack';
import Color from "../constants/Color";

const CategoryMealsScreen: NSSC = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)!

  const goToMeal = () => {
    props.navigation.navigate({
      routeName: 'MealDetail'
    });
  };

  return (
    <View style={styles.screen}>
      <Text>The Meals by Category Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title={'Go to Meal Details!'}
        onPress={goToMeal}
      />
      <Button
        title={'Go back!'}
        onPress={() => { props.navigation.goBack() }}
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

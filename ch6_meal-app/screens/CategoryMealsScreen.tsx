import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import {CATEGORIES} from "../data/dummy-data";

type Props = {
  navigation: NavigationStackProp
};

const CategoryMealsScreen = (props: Props) => {
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

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default CategoryMealsScreen;

import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationStackScreenComponent as NSSC} from "react-navigation-stack";
import {MEALS} from "../data/dummy-data";

const MealScreen: NSSC = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId)!

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title={'Go back to Category!'}
        onPress={() => { props.navigation.popToTop() }}
      />
    </View>
  );
};

MealScreen.navigationOptions = (navData) => {
  const mealId = navData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)!

  return {
    headerTitle: selectedMeal.title
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default MealScreen;

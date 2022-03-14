import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationStackScreenComponent as NSSC} from "react-navigation-stack";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";

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
    headerTitle: selectedMeal.title,

    headerRight: () => {
      const handlePress = () => {
        console.log('Mark as favorite!')
      };

      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            iconName={'ios-star'}
            onPress={handlePress}
            title={'Favorite'}
          />
        </HeaderButtons>
      );
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

export default MealScreen;

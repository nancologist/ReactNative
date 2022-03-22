import {Text, View, StyleSheet, Button, ScrollView, Image} from 'react-native';
import {NavigationStackScreenComponent as NSSC} from "react-navigation-stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import DefaultText from "../components/DefaultText";
import {useSelector} from "../store/store";

const ListItem = (props: any) => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealScreen: NSSC = (props) => {
  const availableMeals = useSelector(state => state.mealsReducer.meals)
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)!

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      />

      <View style={styles.details}>
        <DefaultText>{selectedMeal.durationInMin}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ing => <ListItem key={ing}>{ing}</ListItem>)}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

    </ScrollView>
  );
};

MealScreen.navigationOptions = (navData) => {
  const mealId = navData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)! // PROBLEM , NEXT LECTURE WILL BE SOLVED

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
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealScreen;

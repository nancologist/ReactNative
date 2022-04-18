import {useCallback, useEffect} from 'react'
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {NavigationStackScreenComponent as NSSC} from "react-navigation-stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import DefaultText from "../components/DefaultText";
import {useSelector, useDispatch} from "../store/store";
import * as mealActions from '../store/actions'

const ListItem = (props: any) => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealDetailScreen: NSSC = (props) => {
  const availableMeals = useSelector(state => state.mealsReducer.meals)
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)!
  const dispatch = useDispatch()

  const onToggleFavorite = useCallback(() => {
    dispatch(mealActions.toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ onToggleFavorite })
  }, [onToggleFavorite])

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

MealDetailScreen.navigationOptions = (navData) => {
  const mealTitle = navData.navigation.getParam('mealTitle')
  const handlePress = navData.navigation.getParam('onToggleFavorite')

  return {
    headerTitle: mealTitle,

    headerRight: () => {

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

export default MealDetailScreen;

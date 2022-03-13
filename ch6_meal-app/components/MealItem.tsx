import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import Meal from "../models/meal";

type Props = {
  meal: Meal;
  onSelectMeal: () => void;
};

const MealItem = ({ meal, onSelectMeal }: Props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>

          <View
            style={{
              ...styles.mealRow,
              ...styles.mealHeader
            }}
          >
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{meal.title}</Text>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              ...styles.mealRow,
              ...styles.mealDetail
            }}
          >
            <Text>{meal.durationInMin}m</Text>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability.toUpperCase()}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealDetail: {
    alignItems: 'center',
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  mealHeader: {
    height: '85%'
  },
  mealItem: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    height: 200,
    overflow: 'hidden',
    width: '100%'
  },
  mealRow: {
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 19,
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: 'center'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
});

export default MealItem

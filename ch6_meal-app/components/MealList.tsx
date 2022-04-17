import {
  NavigationStackScreenProps
} from "react-navigation-stack/lib/typescript/src/types";
import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";
import Meal from "../models/meal";
import MealItem from "./MealItem";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";

interface Props {
  listData: Meal[];
  navigation: StackNavigationProp;
}

const MealList = (props: Props) => {

  const renderMealItem: ListRenderItem<Meal> = itemData => {
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({ routeName: 'MealDetail', params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title
            }});
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ marginTop: 15, width: '90%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default MealList;

import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp
};

const CategoriesScreen = (props: Props) => {
  const goToMealsByCat = () => {
    // props.navigation.navigate('MealsByCategory') Simpled Way
    props.navigation.navigate({ routeName: 'MealsByCategory' })
  };

  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title={'Go to Meals!'}
        onPress={goToMealsByCat}
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

export default CategoriesScreen;

import { Text, View, StyleSheet } from 'react-native';

const MealsByCategoryScreen = (props: {}) => {
  return (
    <View style={styles.screen}>
      <Text>The Meals by Category Screen</Text>
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

export default MealsByCategoryScreen;

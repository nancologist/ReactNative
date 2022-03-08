import { Text, View, StyleSheet } from 'react-native';

const MealScreen = (props: {}) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Screen</Text>
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

export default MealScreen;

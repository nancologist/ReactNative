import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationStackProp} from "react-navigation-stack";

type Props = {
  navigation: NavigationStackProp
};

const MealScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Screen</Text>
      <Button
        title={'Go back to Category!'}
        onPress={() => { props.navigation.popToTop() }}
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

export default MealScreen;

import { View, Text, StyleSheet } from 'react-native';

const GameOver = () => {
  return (
    <View style={styles.screen}>
      <Text>PC WON!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOver;

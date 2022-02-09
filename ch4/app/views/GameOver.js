import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>PC WON!!!</Text>
      <Text>Number of Rounds: {props.roundsCount}</Text>
      <Text>Number was: {props.winningNum}</Text>
      <Button title={'NEW GAME'} onPress={props.onReset} />
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

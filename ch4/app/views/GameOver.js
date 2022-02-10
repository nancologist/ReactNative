import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const mountain = require('../assets/success.png');

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>PC WON!!!</Text>
      <Image source={mountain} />
      <Text style={DefaultStyles.bodyText}>Number of Rounds: {props.roundsCount}</Text>
      <Text style={DefaultStyles.bodyText}>Number was: {props.winningNum}</Text>
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

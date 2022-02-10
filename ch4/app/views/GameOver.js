import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const mountain = require('../assets/success.png');

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>PC WON!!!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={mountain}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
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
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    height: 300,
    overflow: 'hidden',
    width: 300,
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default GameOver;

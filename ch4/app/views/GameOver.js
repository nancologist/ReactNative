import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

let mountain = require('../assets/success.png');
mountain = {
  uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
}

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>PC WON!!!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
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

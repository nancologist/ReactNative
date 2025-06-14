import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Color from '../constants/color';
import AppButton from '../components/AppButton';
import * as ScreenOrientation from 'expo-screen-orientation';

let mountain = require('../assets/success.png');
// mountain = {
//   uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
// }

const GameOver = (props) => {
  return (
    <ScrollView>
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
        <View style={styles.resultContainer}>
          <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsCount}</Text> rounds to guess the number{' '}
            <Text style={styles.highlight}>{props.winningNum}</Text>.
          </Text>
        </View>
        <AppButton onPress={props.onReset}>NEW GAME</AppButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    height: Dimensions.get('window').width * 0.7,
    overflow: 'hidden',
    width: Dimensions.get('window').width * 0.7,
    marginVertical: Dimensions.get('window').height / 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  },
  highlight: {
    color: Color.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 40
  }
});

export default GameOver;

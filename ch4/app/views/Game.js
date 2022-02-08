import {View, StyleSheet, Text, Button} from 'react-native';
import {useState} from 'react'

import NumberCmp from '../components/NumberCmp'
import Card from '../components/Card'

// A Game Rule: It should not guess the user's choice on first try!
const generateNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor( ( Math.random() * (max - min) ) + min );

  if (rndNum === exclude) {
    return generateNum(min, max, exclude);
  } else {
    return rndNum;
  }
};

const Game = (props) => {
  const [guess, setGuess] = useState(
    generateNum(1, 100, props.userNum)
  );

  return (
    <View style={styles.screen}>
      <Text>CPU's Guess</Text>
      <NumberCmp number={guess} />
      <Card style={styles.buttonContainer}>
        <Button title={'LOWER'} />
        <Button title={'GREATER'} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default Game;

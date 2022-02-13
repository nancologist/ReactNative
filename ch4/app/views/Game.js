import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import {useState, useRef, useEffect} from 'react'

import NumberCmp from '../components/NumberCmp'
import Card from '../components/Card'
import DefaultStyles from '../constants/default-styles'
import AppButton from '../components/AppButton'

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
  const [pcGuess, setPcGuess] = useState(
    generateNum(1, 100, props.winningNum)
  );

  const { winningNum, onGameOver } = props;

  useEffect(() => {
    if (pcGuess === props.winningNum) {
      props.onGameOver(rounds)
      // Alert.alert('WON', 'PC WON GAME!!!!')
    }
  }, [pcGuess, winningNum, onGameOver])

  const [rounds , setRounds] = useState(0);

  const currentMax = useRef(100);
  const currentMin = useRef(1);

  const generateNextGuess = (direction) => {
    const isUserHintCorrect =
      (direction === 'lower' && pcGuess > props.winningNum) ||
      (direction === 'greater' && pcGuess < props.winningNum);

    if (!isUserHintCorrect) {
      Alert.alert(
        'Wrong hint!',
        'Please correct it!',
        [{ text: 'Sorry', style: 'cancel' }]
      );
      return;
    }

    if (direction === 'lower') {
      currentMax.current = pcGuess;
    } else {
      currentMin.current = pcGuess;
    }

    const nextNum = generateNum(currentMin.current, currentMax.current, pcGuess);
    setPcGuess(nextNum);
    setRounds(prev => prev + 1);
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>CPU's Guess</Text>
      <NumberCmp number={pcGuess} />
      <Card style={styles.buttonContainer}>
        <AppButton onPress={() => generateNextGuess('lower')}>LOWER</AppButton>
        <AppButton onPress={() => generateNextGuess('greater')}>GREATER</AppButton>
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
    width: 400,
    maxWidth: '90%'
  }
});

export default Game;

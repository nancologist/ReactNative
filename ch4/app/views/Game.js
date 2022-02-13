import {View, StyleSheet, Text, Alert, FlatList} from 'react-native';
import {useState, useRef, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';

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
  const firstGuess = generateNum(1, 100, props.winningNum)
  const [pcGuess, setPcGuess] = useState(firstGuess);
  const currentMax = useRef(100);
  const currentMin = useRef(1);
  const { winningNum, onGameOver } = props;
  const [guesses, setGuesses] = useState([firstGuess]);

  useEffect(() => {
    if (pcGuess === props.winningNum) {
      props.onGameOver(guesses.length)
      // Alert.alert('WON', 'PC WON GAME!!!!')
    }
  }, [pcGuess, winningNum, onGameOver]);

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

    setGuesses(prev => [pcGuess, ...prev])
    if (direction === 'lower') {
      currentMax.current = pcGuess;
    } else {
      currentMin.current = pcGuess + 1;
    }
    const nextNum = generateNum(currentMin.current, currentMax.current, pcGuess);
    setPcGuess(nextNum);
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>CPU's Guess</Text>
      <NumberCmp number={pcGuess} />
      <Card style={styles.buttonContainer}>
        <AppButton onPress={() => generateNextGuess('lower')}>
          <Ionicons name={'md-remove'} size={24} color={'white'} />
        </AppButton>
        <AppButton onPress={() => generateNextGuess('greater')}>
          <Ionicons name={'md-add'} size={24} color={'white'} />
        </AppButton>
      </Card>

      <View>
        <FlatList
          data={guesses}
          keyExtractor={(item, index) => item * index}
          renderItem={({ item }) => <Text>Previous Guess: {item}</Text>}
        />
      </View>
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

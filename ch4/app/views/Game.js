import {View, StyleSheet, Text} from 'react-native';
import {useState} from 'react'

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
};

const styles = StyleSheet.create({});

export default Game;

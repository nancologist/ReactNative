import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './views/StartGame';
import Game from './views/Game';

export default function App() {
  const [userNum, setUserNum] = useState();
  const startGame = (selectedNum) => { setUserNum(selectedNum) }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a number!'} />
      {
        userNum ? <Game userNum={userNum} /> : <StartGame onSubmit={startGame} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

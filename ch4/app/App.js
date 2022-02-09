import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './views/StartGame';
import Game from './views/Game';
import GameOver from './views/GameOver';

export default function App() {
  const [guessRounds, setGuessRounds] = useState(0)
  const gameOverHandler = count => {
    setGuessRounds(count);
  };

  const [userNum, setUserNum] = useState();
  const startGame = (selectedNum) => {
    setUserNum(selectedNum);
  }

  const resetGame = () => {
    setGuessRounds(0);
    setUserNum(null);
  };

  return (
    <View style={styles.screen}>
      <Header title={'Guess a number!'} />
      {
        userNum && guessRounds <= 0 ?
          <Game winningNum={userNum} onGameOver={gameOverHandler} /> :

          guessRounds > 0 ?
            <GameOver
              onReset={resetGame}
              roundsCount={guessRounds}
              winningNum={userNum}
            /> :
            <StartGame onSubmit={startGame} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

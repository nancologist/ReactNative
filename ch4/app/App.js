import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import StartGame from './views/StartGame';
import Game from './views/Game';
import GameOver from './views/GameOver';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

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

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAppLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

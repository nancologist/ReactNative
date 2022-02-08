import {useRef, useState} from 'react'
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import AppInput from '../components/AppInput';
import Color from '../constants/color';
import NumberCmp from '../components/NumberCmp';

const StartGame = props => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const [confirmed, setConfirmed] = useState(false);
  const submitInput = () => {
    const num = parseInt(appInput.current.getValue())
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        'Invalid number!',
        'Number should be between 1 and 99.',
        [{ text: 'OK',  style: 'destructive', onPress: clearInput }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(num)
    appInput.current.reset();
    Keyboard.dismiss();
  };

  const appInput = useRef();
  const clearInput = () => {
    appInput.current.reset();
    setConfirmed(false);
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberCmp number={selectedNumber} />
        <Button title={'START GAME'} />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>

        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <AppInput
            autoCapitalize='none'
            autoCorrect={false}
            blurOnSubmit
            keyboardType={'number-pad'}
            maxLength={2}
            ref={appInput}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title={'Reset'} onPress={clearInput} color={Color.secondary} />
            </View>
            <View style={styles.button}>
              <Button title={'Confirm'} onPress={submitInput} color={Color.primary} />
            </View>
          </View>
        </Card>

        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    alignItems: 'center',
    maxWidth: '80%',
    width: 300
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    alignItems: 'center',
    marginTop: 20
  }
});

export default StartGame;

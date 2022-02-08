import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import AppInput from '../components/AppInput';
import Color from '../constants/color';

const StartGame = props => {
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
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title={'Reset'} onPress={() => {}} color={Color.secondary} />
            </View>
            <View style={styles.button}>
              <Button title={'Confirm'} onPress={() => {}} color={Color.primary} />
            </View>
          </View>
        </Card>

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
  }
});

export default StartGame;

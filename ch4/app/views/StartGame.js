import {useRef, useState, useEffect} from 'react'
import {
  View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert,
  Dimensions, ScrollView, KeyboardAvoidingView
} from 'react-native';
import Card from '../components/Card';
import AppInput from '../components/AppInput';
import Color from '../constants/color';
import NumberCmp from '../components/NumberCmp';
import AppButton from '../components/AppButton';

const StartGame = props => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 4);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setBtnWidth(
        Dimensions.get('window').width / 4
      )
    };
    const subscription = Dimensions.addEventListener('change', updateLayout);

    // Clean Up
    return () => subscription?.remove()
  });

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
    setSelectedNumber(num);
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
        <AppButton
          onPress={() => props.onSubmit(selectedNumber)}
        >START GAME</AppButton>
      </Card>
    )
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={'position'}
        keyboardVerticalOffset={30}
      >
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
                <View style={{ width: btnWidth }}>
                  <Button title={'Reset'} onPress={clearInput} color={Color.secondary} />
                </View>
                <View style={{ width: btnWidth }}>
                  <Button title={'Confirm'} onPress={submitInput} color={Color.primary} />
                </View>
              </View>
            </Card>

            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  inputContainer: {
    alignItems: 'center',
    maxWidth: '95%',
    minWidth: 300,
    width: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  // button: {
  //   // width: 100
  //   width: Dimensions.get('window').width / 4
  // },
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

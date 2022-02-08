import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from '../components/Card'
import Color from '../constants/color';

const StartGame = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />

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
  }
});

export default StartGame;

import {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const handleGoalInput = (value) => {
    setEnteredGoal(value)
  };

  const addGoal = () => {
    console.log(enteredGoal)
  };

  return (
    <View style={styles.screen}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          onChangeText={handleGoalInput}
          placeholder="Your Goals..."
          style={styles.input}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      <View>
        {/* List of Goals Placeholder */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});

import {useState} from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ goals, setGoals ] = useState([]);

  const handleGoalInput = (value) => {
    setEnteredGoal(value)
  };

  const addGoal = () => {
    setGoals(prev => [...prev, enteredGoal])
    setEnteredGoal('');
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

      <ScrollView>{goals.map((goal, index) => (
        <View style={styles.listItem} key={index} >
          <Text>{goal}</Text>
        </View>
      ))}</ScrollView>

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
  },
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  }
});

import {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ goals, setGoals ] = useState([]);

  const handleGoalInput = (value) => {
    setEnteredGoal(value)
  };

  const addGoal = () => {
    setGoals(prev => [
      ...prev,
      { uid: Math.random().toString(), value: enteredGoal }
    ])
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInput}
          placeholder="Your Goals..."
          style={styles.input}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoal} />
      </View>

      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.uid}
        renderItem={data => (
          <View style={styles.listItem} >
            <Text>{data.item.value}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
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

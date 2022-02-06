import {useState} from 'react'
import {Button, TextInput, View, StyleSheet, Modal} from 'react-native'

const GoalInput = (props) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const addGoal = () => {
    props.handleGoals(prev => [
      ...prev,
      { uid: Math.random().toString(), value: enteredGoal }
    ])
    setEnteredGoal('');
  };

  const handleGoalInput = (value) => {
    setEnteredGoal(value)
  };

  return (
    <Modal visible={props.open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInput}
          placeholder="Your Goals..."
          style={styles.input}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;

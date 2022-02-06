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
    props.closeModal()
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%'
  }
});

export default GoalInput;

import React, {useState} from 'react'
import {Button, TextInput, View, StyleSheet, Modal} from 'react-native'

const GoalInput = (props) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const addGoal = () => {
    if (enteredGoal.length === 0) {
      return;
    }

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

        <View style={styles.ctrls}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.closeModal} color="red" />
          </View>
          <View style={styles.btn}>
            <Button title="Add" onPress={addGoal} />
          </View>
        </View>

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
  },
  ctrls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  btn: {
    width: '40%'
  }
});

export default GoalInput;

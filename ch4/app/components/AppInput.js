import { useState } from 'react';
import {TextInput, StyleSheet} from 'react-native'

const AppInput = props => {
  const [enteredVal, setEnteredVal] = useState('');
  const handleChange = value => {
    setEnteredVal(
      value.toString().replace(/[^0-9]/g, '')
    );
  }
  return (
    <TextInput
      { ...props }
      onChangeText={handleChange}
      value={enteredVal}
      style={{
        ...styles.appInput,
        ...props.style
      }}
    />
  );
};

const styles = StyleSheet.create({
  appInput: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default AppInput;

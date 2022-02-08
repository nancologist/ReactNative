import {TextInput, StyleSheet} from 'react-native'

const AppInput = props => {
  return (
    <TextInput
      { ...props }
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

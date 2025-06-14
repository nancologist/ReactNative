import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../constants/color';

const AppButton = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans'
  }
});

export default AppButton;

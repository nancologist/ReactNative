import {Text, View, StyleSheet} from 'react-native'
import Color from '../constants/color';

const NumberCmp = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.secondary,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10
  },
  number: {
    color: Color.secondary,
    fontSize: 22
  }
});

export default NumberCmp;

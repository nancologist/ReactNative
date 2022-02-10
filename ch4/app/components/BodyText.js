import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});

export default (props) => <Text style={styles.body}>{props.children}</Text>

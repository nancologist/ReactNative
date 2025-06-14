import {StyleSheet, Text} from "react-native";

const DefaultText = (props: any) => {
  return <Text style={styles.text}>{props.children}</Text>
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
})

export default DefaultText;

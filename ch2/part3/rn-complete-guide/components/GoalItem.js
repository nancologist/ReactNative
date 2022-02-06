import {Text, View, StyleSheet} from 'react-native'

const GoalItem = (props) => {
  return (
    <View style={styles.listItem} >
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  }
});

export default GoalItem;

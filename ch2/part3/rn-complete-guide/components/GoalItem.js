import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const GoalItem = (props) => {
  const title = props.item.value
  const deleteItem = () => {
    props.handleGoals(prev => prev.filter(goal => goal.uid !== props.item.uid))
  };

  return (
    <TouchableOpacity onPress={deleteItem} >
      <View style={styles.listItem} >
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
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

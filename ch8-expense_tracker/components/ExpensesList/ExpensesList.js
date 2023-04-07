import { FlatList, Text, View } from 'react-native';

const Item = ({ expense }) => (
  <View>
    <Text>{expense.desc}</Text>
    <Text>{expense.amount}</Text>
  </View>
)

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={
        ({ item }) => <Item expense={item}/>
      }
    />
  );
}

export default ExpensesList;

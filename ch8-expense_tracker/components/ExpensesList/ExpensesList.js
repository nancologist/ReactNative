import { FlatList } from 'react-native';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={
        ({ item }) => <ExpenseItem expense={item}/>
      }
    />
  );
}

export default ExpensesList;

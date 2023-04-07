import { View } from 'react-native';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary/>
      <ExpensesList/>
    </View>
  );
}

export default ExpensesOutput;

import { View } from 'react-native';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';

function ExpensesOutput({ expenses, period }) {
  return (
    <View>
      <ExpensesSummary period={period} expenses={expenses}/>
      <ExpensesList/>
    </View>
  );
}

export default ExpensesOutput;

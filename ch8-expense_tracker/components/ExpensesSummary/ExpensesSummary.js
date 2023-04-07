import { Text, View } from 'react-native';

function ExpensesSummary({ period, expenses }) {
  const expensesSum = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (<View>
    <Text>{period}</Text>
    <Text>${expensesSum.toFixed(2)}</Text>
  </View>);
}

export default ExpensesSummary;

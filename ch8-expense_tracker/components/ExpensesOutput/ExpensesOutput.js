import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';

const dummyExpenses = [
  {
    id: 'e1',
    desc: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    desc: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05')
  },
  {
    id: 'e3',
    desc: 'some bananas',
    amount: 5.99,
    date: new Date('2021-12-01')
  },
  {
    id: 'e4',
    desc: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19')
  },
  {
    id: 'e5',
    desc: 'A book',
    amount: 18.59,
    date: new Date('2022-02-18')
  }
]

function ExpensesOutput({ expenses, period }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={dummyExpenses}/>
      <ExpensesList expenses={dummyExpenses}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // To cover the whole screen
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
});

export default ExpensesOutput;

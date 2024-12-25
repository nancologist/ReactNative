import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';

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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});

export default ExpensesOutput;

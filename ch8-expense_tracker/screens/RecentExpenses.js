import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  const date7DaysAgo = getDateMinusDays(new Date(), 7)
  const recentExpenses = expensesCtx.expenses.filter((exp) => exp.date > date7DaysAgo);
  return <ExpensesOutput period={'Last 7 days'} expenses={recentExpenses} fallbackText={'No expenses in the last 7 days'}/>
}

export default RecentExpenses;

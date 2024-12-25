import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";

function AllExpenses() {
  // NEW WAY of consuming Context:
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      period={'Total'}
      expenses={expensesCtx.expenses}
      fallbackText={'No expenses yet!'}
    />


      // OLDER WAY of Consuming Context:
      // <ExpensesContext.Consumer>
      //     {(expensesCtx) => (
      //          <ExpensesOutput
      //            period={'Total'}
      //            expenses={expensesCtx.expenses}
      //          />
      //     )}
      // </ExpensesContext.Consumer>
  );
}

export default AllExpenses;

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {useContext, useEffect, useState} from "react";
import {AppApi} from "../api";
import {ExpensesContext} from "../store/expenses-context";

function AllExpenses() {
    // NEW WAY of consuming Context:
    const expensesCtx = useContext(ExpensesContext);

    const [expenses, setExpenses] = useState(null);

    useEffect(() => {
        const fetchAllExpenses = async () => {
            const data = await AppApi.getExpenses();
            setExpenses(data);
            expensesCtx.onAllExpensesFetched(data);
        }
        fetchAllExpenses();
    }, []);

    return (
        <ExpensesOutput
            period={'Total'}
            expenses={expenses}
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

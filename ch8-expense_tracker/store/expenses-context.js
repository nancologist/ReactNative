import {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {
    },
    deleteExpense: (expenseId) => {
    },
    updateExpense: (expenseId, {description, amount, date}) => {
    },
    onAllExpensesFetched: (expenses) => {
    }
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'FETCH_ALL':
            return [...action.payload];
        case 'ADD':
            return [...state, {...action.payload}]
        case 'UPDATE':
            const index = state.findIndex(exp => exp.id === action.payload.id);
            const previousExpense = state[index]
            const newExpense = {
                ...previousExpense,
                ...action.payload.data // This overrides props of previousExpense
            }
            const newState = [...state]
            newState[index] = newExpense;
            return newState;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

export function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    const addExpense = (expenseDto) => {
        dispatch({type: 'ADD', payload: expenseDto})
    }

    const deleteExpense = (expenseId) => {
        dispatch({type: 'DELETE', payload: expenseId})
    }

    const updateExpense = (expenseId, expenseDto) => {
        dispatch({type: 'UPDATE', payload: {id: expenseId, data: expenseDto}})
    }

    const onAllExpensesFetched = (expenses) => {
        dispatch({type: 'FETCH_ALL', payload: expenses});
    }

    return <ExpensesContext.Provider value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
        onAllExpensesFetched
    }}>{children}</ExpensesContext.Provider>
}
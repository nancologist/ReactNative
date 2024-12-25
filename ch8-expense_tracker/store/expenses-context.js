import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
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
    },
    {
        id: 'e6',
        desc: 'some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e7',
        desc: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e8',
        desc: 'A book',
        amount: 18.59,
        date: new Date('2022-02-18')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {
    },
    deleteExpense: (expenseId) => {
    },
    updateExpense: (expenseId, {description, amount, date}) => {
    }
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [...state.expenses, { id, ...action.payload}]
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
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseDto) => {
        dispatch({type: 'ADD', payload: expenseDto})
    }

    const deleteExpense = (expenseId) => {
        dispatch({type: 'DELETE', payload: expenseId})
    }

    const updateExpense = (expenseId, expenseDto) => {
        dispatch({type: 'UPDATE', payload: { id: expenseId, data: expenseDto}})
    }

    return <ExpensesContext.Provider value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense
    }}>{children}</ExpensesContext.Provider>
}
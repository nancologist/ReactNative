import {useContext, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContext} from "../store/expenses-context";
import {AppForm} from "../components/AppForm";
import {AppApi} from "../api";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";

function ManageExpense({route, navigation}) {
    const expenseId = route.params?.expenseId;
    const isUpdating = !!expenseId;
    const expensesCtx = useContext(ExpensesContext);
    const expenseContext = useContext(ExpensesContext);
    const selectedExpense = expenseContext.expenses.find(expense => expense.id === expenseId);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isUpdating ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isUpdating])

    const onDelete = async () => {
        setIsLoading(true);
        await AppApi.deleteExpense(expenseId);
        setIsLoading(false);
        expensesCtx.deleteExpense(expenseId);
        navigation.goBack();
    }

    const formCanceled = () => {
        navigation.goBack();
    }

    const formSubmitted = async ({description, amount, date}) => {
        // Dummy data for test, next chapter inputs will be implemented:
        if (isUpdating) {
            setIsLoading(true);
            await AppApi.updateExpense({id: expenseId, description, amount, date})
            setIsLoading(false);
            expensesCtx.updateExpense(expenseId, {
                description,
                amount: Number.parseFloat(amount),
                date: new Date(date),
            })
        } else {
            setIsLoading(true);
            const persistedExpense = await AppApi.postExpense({description, amount, date})
            setIsLoading(false);
            expenseContext.addExpense({...persistedExpense, date: new Date(persistedExpense.date)});
        }
        navigation.goBack();
    }

    if (isLoading) {
        return <LoadingOverlay/>;
    }

    return (
        <View style={styles.container}>
            <AppForm onSubmit={formSubmitted} onCancel={formCanceled} defaultValues={selectedExpense} isUpdating={isUpdating}/>
            {isUpdating &&
                <View style={styles.deleteContainer}>
                    <IconButton
                        pressHandler={onDelete}
                        iconName={'trash'}
                        color={GlobalStyles.colors.error500}
                        size={36}
                    />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})

export default ManageExpense;

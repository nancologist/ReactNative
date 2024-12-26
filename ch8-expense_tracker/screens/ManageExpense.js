import {useContext, useLayoutEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AppButton from '../components/UI/AppButton';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContext} from "../store/expenses-context";
import {AppForm} from "../components/AppForm";

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isUpdating = !!expenseId;
  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isUpdating ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isUpdating])

  const onDelete = () => {
    expensesCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  const onCancel = () => {
    navigation.goBack();
  }

  const onConfirm = () => {
    // Dummy data for test, next chapter inputs will be implemented:
    if (isUpdating) {
      expensesCtx.updateExpense(expenseId, {
        description: 'Test2',
        amount: 50,
        date: new Date('2023-06-19')
      })
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 30,
        date: new Date('2022-05-19')
      })
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <AppForm/>
      <View style={styles.buttons}>
        <TextInput/>
        <AppButton mode={'flat'} onPress={onCancel} style={styles.button}>Cancel</AppButton>
        <AppButton onPress={onConfirm} style={styles.button}>{isUpdating ? 'Update' : 'Add'}</AppButton>
      </View>
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
})

export default ManageExpense;

import { useLayoutEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppButton from '../components/UI/AppButton';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [ navigation, isEditing ])

  const onDelete = () => {
    // navigation.navigate('RecentExpenses', { deletedExpenseId: expenseId })
    navigation.goBack();
  }

  const onCancel = () => {
    navigation.goBack();
  }

  const onConfirm = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <AppButton mode={'flat'} onPress={onCancel} style={styles.button}>Cancel</AppButton>
        <AppButton onPress={onConfirm} style={styles.button}>{isEditing ? 'Update' : 'Add'}</AppButton>
      </View>
      {isEditing &&
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

import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';

function ExpensesOutput({expenses, period, fallbackText}) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>;
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary period={period} expenses={expenses}/>
            {content}
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
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
});

export default ExpensesOutput;

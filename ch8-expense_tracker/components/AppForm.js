import {Alert, StyleSheet, Text, TextInput, View} from "react-native";
import {AppInput} from "./AppInput";
import {useState} from "react";
import AppButton from "./UI/AppButton";
import {getFormattedDate} from "../util/date";


export const AppForm = ({onSubmit, onCancel, isUpdating, defaultValues}) => {
    const [formValues, setFormValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        description: defaultValues ? defaultValues.description : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : ''
    })

    const onInputsChange = (inputId, value) => {
        setFormValues(
            (currValue) => ({...currValue, [inputId]: value})
        )
    }

    const submitHandler = () => {
        const data = {
            amount: +formValues.amount,
            date: new Date(formValues.date),
            description: formValues.description
        }

        const amountValid = !isNaN(data.amount) && data.amount > 0;
        const dateValid = !isNaN(data.date.getTime());
        const descriptionValid = data.description.trim().length > 0;
        if (!amountValid || !dateValid || !descriptionValid) {
            Alert.alert('Invalid input, please check!')
            return;
        }

        onSubmit(data);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <AppInput label={'Amount'}
                          style={{flex: 1}}
                          textInputConfig={{
                              keyboardType: 'decimal-pad',
                              onChangeText: (value) => onInputsChange('amount', value),
                              value: formValues.amount
                          }}
                />
                <AppInput label={'Date'}
                          style={{flex: 1}}
                          textInputConfig={{
                              placeholder: 'YYYY-MM-DD',
                              maxLength: 10,
                              onChangeText: (value) => onInputsChange('date', value),
                              value: formValues.date
                          }}
                />
            </View>
            <AppInput label={'Description'}
                      textInputConfig={{
                          multiline: true,
                          autoCorrect: true, // default value
                          autoCapitalize: 'sentences', // default value
                          onChangeText: (value) => onInputsChange('description', value),
                          value: formValues.description
                      }}
            />

            <View style={styles.buttons}>
                <TextInput/>
                <AppButton mode={'flat'} onPress={onCancel} style={styles.button}>Cancel</AppButton>
                <AppButton onPress={submitHandler} style={styles.button}>{isUpdating ? 'Update' : 'Add'}</AppButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
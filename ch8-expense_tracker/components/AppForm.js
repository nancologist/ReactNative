import {StyleSheet, Text, TextInput, View} from "react-native";
import {AppInput} from "./AppInput";
import {useState} from "react";
import AppButton from "./UI/AppButton";
import {getFormattedDate} from "../util/date";


export const AppForm = ({onSubmit, onCancel, isUpdating, defaultValues}) => {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            valid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            valid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            valid: true,
        },
    })

    const onInputsChange = (inputId, value) => {
        setInputs(
            (currValue) => ({...currValue, [inputId]: {value, valid: true}})
        )
    }

    const submitHandler = () => {
        const data = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountValid = !isNaN(data.amount) && data.amount > 0;
        const dateValid = !isNaN(data.date.getTime());
        const descriptionValid = data.description.trim().length > 0;
        if (!amountValid || !dateValid || !descriptionValid) {
            setInputs((curInputs) => {
                return {
                    amount: {
                        value: curInputs.amount.value,
                        valid: amountValid
                    },
                    date: {
                        value: curInputs.date.value,
                        valid: dateValid
                    },
                    description: {
                        value: curInputs.description.value,
                        valid: descriptionValid
                    }
                }
            })
            return;
        }

        onSubmit(data);
    }

    const formInvalid = !inputs.amount.valid || !inputs.date.valid || !inputs.description.valid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <AppInput label={'Amount'}
                          style={{flex: 1}}
                          textInputConfig={{
                              keyboardType: 'decimal-pad',
                              onChangeText: (value) => onInputsChange('amount', value),
                              value: inputs.amount.value
                          }}
                />
                <AppInput label={'Date'}
                          style={{flex: 1}}
                          textInputConfig={{
                              placeholder: 'YYYY-MM-DD',
                              maxLength: 10,
                              onChangeText: (value) => onInputsChange('date', value),
                              value: inputs.date.value
                          }}
                />
            </View>
            <AppInput label={'Description'}
                      textInputConfig={{
                          multiline: true,
                          autoCorrect: true, // default value
                          autoCapitalize: 'sentences', // default value
                          onChangeText: (value) => onInputsChange('description', value),
                          value: inputs.description.value
                      }}
            />
            {formInvalid && <Text>Invalid input - please check the fields!</Text>}
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
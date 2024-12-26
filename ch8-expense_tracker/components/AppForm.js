import {StyleSheet, Text, View} from "react-native";
import {AppInput} from "./AppInput";

export const AppForm = () => {
    const onAmountChanged = () => {
    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <AppInput label={'Amount'}
                          style={{flex: 1}}
                          textInputConfig={{
                              keyboardType: 'decimal-pad',
                              onChangeText: onAmountChanged,
                          }}
                />
                <AppInput label={'Date'}
                          style={{flex: 1}}
                          textInputConfig={{
                              placeholder: 'YYYY-MM-DD',
                              maxLength: 10,
                              onChangeText: () => {
                              }
                          }}
                />
            </View>
            <AppInput label={'Description'}
                      textInputConfig={{
                          multiline: true,
                          autoCorrect: true, // default value
                          autoCapitalize: 'sentences' // default value
                      }}
            />
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
    }
})
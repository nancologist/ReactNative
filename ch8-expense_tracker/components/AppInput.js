import {StyleSheet, Text, TextInput, View} from "react-native";
import {GlobalStyles} from "../constants/styles";

export const AppInput = ({label, textInputConfig}) => {
    const inputStyles = [styles.input]
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multiline)
    }

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    multiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})
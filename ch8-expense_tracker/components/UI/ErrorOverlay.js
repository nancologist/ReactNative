import {StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";
import AppButton from "./AppButton";

export const ErrorOverlay = ({message, onConfirm}) => {
    return <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An error occured!</Text>
        <Text style={styles.text}>{message}</Text>
        <AppButton onPress={onConfirm}>Ok</AppButton>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
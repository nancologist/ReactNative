import {Text, TextInput, View} from "react-native";

export const AppInput = ({label, textInputConfig}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig} />
        </View>
    )
}
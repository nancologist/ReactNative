import {View} from "react-native";
import {AppInput} from "./AppInput";

export const AppForm = () => {
    const onAmountChanged = () => {
    }
    return (
        <View>
            <AppInput
                label={'Amount'}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: onAmountChanged,
                }}
            />
            <AppInput label={'Date'}
                      textInputConfig={{
                          placeholder: 'YYYY-MM-DD',
                          maxLength: 10,
                          onChangeText: () => {
                          }
                      }}
            />
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
import {Pressable, StyleSheet, Text} from "react-native";
import {COLOR} from "../../colors";
import {PressEventHandler} from "../../types";

export const BaseButton = ({onPress, children}: { onPress: PressEventHandler, children: any }) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 4,
        backgroundColor: COLOR.primary800,
        elevation: 2,
        shadowColor: 'black', // for iOS
        shadowOpacity: 0.15,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        borderRadius: 4
    },
    pressed: {
        opacity: 0.7
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: COLOR.primary50
    }
})
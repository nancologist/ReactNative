import {Pressable, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {COLOR} from "../../colors";
import {PressEventHandler} from "../../types";

type Props = {
    onPress: PressEventHandler;
    icon: keyof typeof Ionicons.glyphMap;
    children: any;
}

export function OutlinedButton({onPress, icon, children}: Props) {
    return <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Ionicons name={icon} size={18} style={styles.icon} color={COLOR.primary500}/>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLOR.primary500
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: COLOR.primary500
    }
})
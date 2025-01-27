import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {PressEventHandler} from "../../types";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: PressEventHandler,
    size: number;
    color?: string;
}

export default function IconButton({icon, onPress, size, color}: Props) {
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    }
})
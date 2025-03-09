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
    /**
     * Using onPressIn instead of onPress here is just a workaround until the issue https://github.com/software-mansion/react-native-screens/issues/2219 is fixed.
     * Another workaround suggested in the above thread is to set headerTransparent: false
     */
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPressIn={onPress}>
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
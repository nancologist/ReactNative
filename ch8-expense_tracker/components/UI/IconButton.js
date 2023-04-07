import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

function IconButton({ iconName, size, color, pressHandler }) {
  return (
    <Pressable onPress={pressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.btnContainer}>
        <Ionicons name={iconName} size={size} color={color}/>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressed: { // Styling for the moment when the button is pressed
    opacity: 0.75
  }
})

export default IconButton;

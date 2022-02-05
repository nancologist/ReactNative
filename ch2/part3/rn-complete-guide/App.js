import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View
          style={styles.inputContainer}
      >
        <TextInput
            placeholder="Your Goals..."
            style={styles.input}
        />
        <Button title="Add" />
      </View>
      <View>
        {/* List of Goals Placeholder */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
});

import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
            placeholder="Your Goals..."
            style={{
                borderColor: 'black',
                borderBottomWidth: 1,
                padding: 10
            }}
        />
        <Button title="Add" />
      </View>
      <View>
        {/* List of Goals Placeholder */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
          style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between'
          }}
      >
        <TextInput
            placeholder="Your Goals..."
            style={{
                borderColor: 'black',
                borderWidth: 1,
                padding: 10,
                width: '80%'
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

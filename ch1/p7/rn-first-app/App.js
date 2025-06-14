import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [msg, setMsg] = useState('Open up Index.js to start working on your app!');
  const handlePress = () => {
    setMsg('Text changed!');
  };
  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <Button title="Change Text" onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

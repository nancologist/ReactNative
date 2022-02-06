import {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ goals, setGoals ] = useState([]);

  return (
    <View style={styles.screen}>
      <GoalInput handleGoals={setGoals} />

      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.uid}
        renderItem={data => <GoalItem item={data.item} handleGoals={setGoals} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

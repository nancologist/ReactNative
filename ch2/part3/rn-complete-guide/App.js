import {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ goals, setGoals ] = useState([]);
  const [ modalOpen, setModalOpen ] = useState(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={ () => { setModalOpen(true) } } />
      <GoalInput
        closeModal={ () => { setModalOpen(false) } }
        handleGoals={setGoals}
        open={modalOpen}
      />

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

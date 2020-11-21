import React, { useState } from 'react';
import {
    Button, 
    StyleSheet, 
    TextInput, 
    View, 
    FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [ getGoal, setGoal ] = useState('');
    const [ getGoals, setGoals ] = useState([]);

    const handleGoalInput = (enteredText) => {
        setGoal(enteredText);
    };

    const addGoal = () => {
        const newGoal = getGoal;

        // setGoals([...getGoals, newGoal]); There's no guarantie that "getGoals" is the exactly last snapshot of its state, so we should use this instead:
        setGoals(prevGoals => [
            ...prevGoals,
            { myKey: Math.random.toString(), val: newGoal } 
        ]);
    };

    return (
        <View style={ styles.screen }>
            <GoalInput 
                goal={getGoal}
                textChanged={handleGoalInput}
                btnClicked={addGoal}
            />
            <FlatList 
                data={getGoals}
                keyExtractor={(item, index) => item.myKey}
                renderItem={ data => <GoalItem myVal={data.item.val} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});

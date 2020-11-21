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
    const [ getGoals, setGoals ] = useState([]);

    const addGoal = (newGoal) => {
        // setGoals([...getGoals, newGoal]); There's no guarantie that "getGoals" is the exactly last snapshot of its state, so we should use this instead:
        setGoals(prevGoals => [
            ...prevGoals,
            { myKey: Math.random().toString(), val: newGoal } 
        ]);
    };

    const removeGoal = goalKey => {
        setGoals(currentGoals => currentGoals.filter(goal => goal.myKey !== goalKey));
    };

    return (
        <View style={ styles.screen }>
            <GoalInput onAddGoal={addGoal}/>
            <FlatList 
                data={getGoals}
                keyExtractor={(item, index) => item.myKey}
                renderItem={ data => 
                    <GoalItem 
                        myKey={data.item.myKey}
                        myVal={data.item.val}
                        onDelete={removeGoal} 
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});

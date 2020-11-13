import React, { useState } from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function App() {
    const [ getGoal, setGoal ] = useState('');
    const [ getGoals, setGoals ] = useState([]);

    const handleGoalInput = (enteredText) => {
        setGoal(enteredText);
    };

    const addGoal = () => {
        const newGoal = getGoal;

        // setGoals([...getGoals, newGoal]); There's no guarantie that "getGoals" is the exactly last snapshot of its state, so we should use this instead:
        setGoals( (prevGoals) => [...prevGoals, newGoal ] );
    };

    return (
        <View style={ styles.screen }>
            <View style={ styles.inputContainer }>
                <TextInput
                    onChangeText={ handleGoalInput }
                    placeholder={ 'Course Goal' }
                    style={ styles.input }
                    value={ getGoal }
                />
                <Button title={'ADD'} onPress={ addGoal } />
            </View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

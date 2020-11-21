import React, { useState } from 'react';
import {
    Button, 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    ScrollView,
    FlatList
} from 'react-native';

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
            <View style={ styles.inputContainer }>
                <TextInput
                    onChangeText={ handleGoalInput }
                    placeholder={ 'Course Goal' }
                    style={ styles.input }
                    value={ getGoal }
                />
                <Button title={'ADD'} onPress={ addGoal } />
            </View>
            <FlatList 
                data={getGoals}
                keyExtractor={(item, index) => item.myKey}
                renderItem={ data => (
                    <View style={ styles.listItem }>
                        <Text> {data.item.val} </Text>
                    </View>
                )}
            />
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
    },

    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

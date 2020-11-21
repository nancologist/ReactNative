import React, { useState } from 'react';
import { Modal, Button, View, TextInput, StyleSheet } from 'react-native';

export default (props) => {
    const [goal, setGoal] = useState('');

    const handleGoalInput = (enteredText) => {
        setGoal(enteredText);
    };

    return (
        <Modal visible={props.open} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleGoalInput}
                    placeholder={'Course Goal'}
                    style={styles.input}
                    value={goal}
                />

                {/* 
                Passing Data to a Function as Parameter and send it to the Parent Cmp:
                Alt 1: 
                */}
                {/* <Button title={'ADD'} onPress={props.onAddGoal.bind(this, goal)} /> */}

                {/* Alt 2: (Much Easier than Alt 1) */}
                <Button title={'ADD'} onPress={() => props.onAddGoal(goal)} />

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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

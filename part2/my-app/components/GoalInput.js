import React, { useState } from 'react';
import { Modal, Button, View, TextInput, StyleSheet } from 'react-native';

export default (props) => {
    const [goal, setGoal] = useState('');

    const handleGoalInput = (enteredText) => {
        setGoal(enteredText);
    };

    const handlePress = () => {
        props.onAddGoal(goal);
        setGoal(''); // Clear Input.
    }

    return (
        <Modal visible={props.open} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleGoalInput}
                    placeholder={'Course Goal'}
                    style={styles.input}
                    value={goal}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title={'Cancel'} color={'red'} onPress={props.closeModal} />
                    </View>
                    {/* 
                    Passing Data to a Function as Parameter and send it to the Parent Cmp:
                    Alt 1: 
                    */}
                    {/* <Button title={'ADD'} onPress={props.onAddGoal.bind(this, goal)} /> */}
                    {/* Alt 2: (Much Easier than Alt 1) */}
                    <View style={styles.btn}>
                        <Button title={'ADD'} onPress={handlePress} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1 /* No matter which value, Setting "flex" let <View> takes the whole height as the only children of Modal. */
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%'
    },

    input: {
        width: '85%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },

    btn: {
        width: 80
    }
});

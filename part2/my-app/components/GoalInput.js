import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

export default (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            onChangeText={props.textChanged}
            placeholder={'Course Goal'}
            style={styles.input}
            value={props.goal}
        />
        <Button title={'ADD'} onPress={props.btnClicked} />
    </View>
);

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

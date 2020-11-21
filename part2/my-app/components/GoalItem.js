import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default (props) => (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        <View style={styles.listItem}>
            <Text> {props.myVal} </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

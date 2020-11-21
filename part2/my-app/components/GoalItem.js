import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => (
    <View style={styles.listItem}>
        <Text> {props.myVal} </Text>
    </View>
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

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, /* takes all spaces, it can take. */
        padding: 10,
        alignItems: 'center',
    },
});

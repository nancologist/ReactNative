import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';

export default function App() {
    const onLocationBtnPressed = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
    }

    return (
        <View style={styles.container}>
            <Button title={'Location'} onPress={onLocationBtnPressed}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

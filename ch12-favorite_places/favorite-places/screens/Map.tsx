import MapView, {MapPressEvent, Marker, Region} from "react-native-maps";
import {Alert, StyleSheet} from "react-native";
import {FC, useCallback, useLayoutEffect, useState} from "react";
import {ParamListBase} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import IconButton from "../components/UI/IconButton";
import {PressEventHandler} from "../types";

export type Location = { latitude: number, longitude: number }

export const Map: FC<NativeStackScreenProps<ParamListBase, 'map'>> = ({navigation}) => {

    const [selectedLocation, setSelectedLocation] = useState<Location>();

    const region: Region = {
        // Set the center of the map when opening it:
        latitude: 37.78,
        longitude: -122.43,
        // Delta props are there to show how much of the map around the center should be visible:
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const onMapPressed = (event: MapPressEvent) => {
        const {latitude, longitude} = event.nativeEvent.coordinate;
        setSelectedLocation({latitude, longitude});
    };

    const onSaveBtnPressed: PressEventHandler = useCallback(
        () => {
            if (!selectedLocation) {
                Alert.alert('You have to pick a location first!');
                return;
            }
            navigation.navigate('add-place', selectedLocation);
        },
        [navigation, selectedLocation]
    );

    useLayoutEffect(
        () => {
            navigation.setOptions({
                headerRight: ({tintColor}) => {
                    return <IconButton icon={'save'} onPress={onSaveBtnPressed} size={24} color={tintColor}/>;
                }
            });
        },
        [navigation, onSaveBtnPressed]
    )

    return (
        <MapView style={styles.map} initialRegion={region} onPress={onMapPressed}>
            {selectedLocation && <Marker coordinate={selectedLocation}/>}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})
import MapView, {MapPressEvent, Marker, Region} from "react-native-maps";
import {Alert, StyleSheet} from "react-native";
import {FC, useCallback, useLayoutEffect, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import IconButton from "../components/UI/IconButton";
import {PressEventHandler} from "../types";
import {Location} from "../models/models-and-types";
import {AppParamList} from "../App";

type MapProps = NativeStackScreenProps<AppParamList, 'map'> & {
    // other props...
}

export const Map: FC<MapProps> = ({navigation, route}) => {
    const initialLocation: Location | null = route.params?.location ?? null;
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(initialLocation);

    const region: Region = {
        // Set the center of the map when opening it:
        latitude: initialLocation ? initialLocation.latitude : 37.78,
        longitude: initialLocation ? initialLocation.longitude : -122.43,
        // Delta props are there to show how much of the map around the center should be visible:
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const onMapPressed = (event: MapPressEvent) => {
        if (initialLocation) return;
        const {latitude, longitude} = event.nativeEvent.coordinate;
        setSelectedLocation({latitude, longitude});
    };

    const onSaveBtnPressed: PressEventHandler = useCallback(
        () => {
            if (!selectedLocation) {
                Alert.alert('You have to pick a location first!');
                return;
            }
            navigation.popTo('add-place', selectedLocation);
        },
        [navigation, selectedLocation]
    );

    useLayoutEffect(
        () => {
            if (initialLocation) return void 0;
            navigation.setOptions({
                headerRight: ({tintColor}) => {
                    return <IconButton icon={'save'} onPress={onSaveBtnPressed} size={24} color={tintColor}/>;
                }
            });
        },
        [navigation, onSaveBtnPressed, initialLocation]
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
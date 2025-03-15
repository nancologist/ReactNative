import MapView, {MapPressEvent, Marker, Region} from "react-native-maps";
import {StyleSheet} from "react-native";
import {useState} from "react";

export function Map() {

    const [selectedLocation, setSelectedLocation] = useState<{ latitude: number, longitude: number }>();

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
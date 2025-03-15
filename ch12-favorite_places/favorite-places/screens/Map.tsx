import MapView, {Region} from "react-native-maps";
import {StyleSheet} from "react-native";

export function Map() {

    const region: Region = {
        // Set the center of the map when opening it:
        latitude: 37.78,
        longitude: -122.43,
        // Delta props are there to show how much of the map around the center should be visible:
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    return (
        <MapView style={styles.map} initialRegion={region}></MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})
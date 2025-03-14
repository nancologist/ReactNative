import {StyleSheet, View} from "react-native";
import {OutlinedButton} from "./UI/OutlinedButton";
import {COLOR} from "../colors";

export function LocationPicker() {

    const getLocationHandler = () => {
    };

    const pickOnMapHandler = () => {
    };

    return (
        <View>
            <View style={styles.mapPreview}></View>
            <View style={styles.actions}>
                <OutlinedButton onPress={getLocationHandler} icon={'location'}>Locate User</OutlinedButton>
                <OutlinedButton onPress={pickOnMapHandler} icon={'map'}>Pick on map</OutlinedButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 0,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLOR.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
import {Alert, StyleSheet, View} from "react-native";
import {OutlinedButton} from "./UI/OutlinedButton";
import {COLOR} from "../colors";
import {getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from "expo-location";

export function LocationPicker() {

    const [permissionResponse, requestPermission] = useForegroundPermissions();

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync()
        console.log(location)
    };

    const verifyPermission = async () => {
        if (permissionResponse?.status === PermissionStatus.UNDETERMINED) {
            const userResponse = await requestPermission();
            return userResponse.granted;
        } else if (permissionResponse?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permission, you should grant the access for the location');
            return false;
        } else {
            return true;
        }
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
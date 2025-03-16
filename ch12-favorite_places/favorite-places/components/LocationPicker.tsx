import {Alert, Image, StyleSheet, Text, View} from "react-native";
import {OutlinedButton} from "./UI/OutlinedButton";
import {COLOR} from "../colors";
import {getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from "expo-location";
import {useEffect, useState} from "react";
import {convertLocationToAddress, createMapPreviewUrl} from "../location";
import {ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootParamList} from "../App";
import {LocationWithAddress} from "../models/models-and-types";

type Props = {
    onLocationSelected: (location: LocationWithAddress) => void;
}

export function LocationPicker({onLocationSelected}: Props) {

    const isFocused = useIsFocused();

    // Anmerkungen in README:
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootParamList, 'add-place'>>();

    const [pickedLocation, setPickedLocation] = useState<{ latitude: number, longitude: number }>();
    const [permissionResponse, requestPermission] = useForegroundPermissions();

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync()
        setPickedLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    };

    useEffect(
        // This function will rerun everytime mapPickedLocation (the dependency) changes:
        () => {
            if (isFocused && route.params) {
                const mapPickedLocation = {latitude: route.params.latitude, longitude: route.params.longitude};
                setPickedLocation(mapPickedLocation)
            }
        },
        [route, isFocused]
    );

    useEffect(() => {
        (async () => {
            if (pickedLocation) {
                const address = await convertLocationToAddress(pickedLocation)
                onLocationSelected({...pickedLocation, address});
            }
        })()
    }, [pickedLocation, onLocationSelected]);

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
        navigation.navigate('map');
    };

    let locationPreview = <Text>Location Preview</Text>
    if (pickedLocation) {
        locationPreview = <Image style={styles.image} source={{uri: createMapPreviewUrl(pickedLocation.latitude, pickedLocation.longitude)}}/>;
    }

    return (
        <View>
            <View style={styles.mapPreview}>{locationPreview}</View>
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
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4
    }
})
import {Alert, Button, View} from "react-native";
import {launchCameraAsync, PermissionStatus, useCameraPermissions} from "expo-image-picker";

export const CameraCapture = () => {

    // For iOS:
    const [permissionResponse, requestPermission] = useCameraPermissions();
    const verifyPermission = async () => {
        if (permissionResponse?.status === PermissionStatus.UNDETERMINED) {
            const userResponse = await requestPermission();
            return userResponse.granted;
        } else if (permissionResponse?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficinet permission, you should grand the access to the camera');
            return false;
        } else {
            return true;
        }
    };

    const takeImageHandler = async () => {
        // for iOS:
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        })
        console.log(image)
    }

    return (
        <View>
            <View></View>
            <Button title={'Kamera'} onPress={takeImageHandler}/>
        </View>
    );
}
import {Alert, Image, StyleSheet, Text, View} from "react-native";
import {launchCameraAsync, PermissionStatus, useCameraPermissions} from "expo-image-picker";
import {useState} from "react";
import {COLOR} from "../colors";
import {OutlinedButton} from "./UI/OutlinedButton";

type Props = {
    onImageCaptured: (imageUri: string) => void;
}

export const ImagePicker = ({onImageCaptured}: Props) => {

    const [capturedImage, setCapturedImage] = useState<string>();

    // For iOS:
    const [permissionResponse, requestPermission] = useCameraPermissions();
    const verifyPermission = async () => {
        if (permissionResponse?.status === PermissionStatus.UNDETERMINED) {
            const userResponse = await requestPermission();
            return userResponse.granted;
        } else if (permissionResponse?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permission, you should grant the access to the camera');
            return false;
        } else {
            return true;
        }
    };

    const captureImageHandler = async () => {
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
        const imageUri = image.assets?.[0].uri;
        if (imageUri) {
            setCapturedImage(imageUri)
            onImageCaptured(imageUri)
        } else {
            throw new Error('imageUri undefined!')
        }
    }

    let imagePreview = <Text>Image Preview</Text>
    if (capturedImage) {
        imagePreview = <Image style={styles.image} source={{uri: capturedImage}}/>
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <OutlinedButton icon={'camera'} onPress={captureImageHandler}>Take Image</OutlinedButton>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 0,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLOR.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
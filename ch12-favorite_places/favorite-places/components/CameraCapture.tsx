import {Button, View} from "react-native";
import {launchCameraAsync} from "expo-image-picker";

export const CameraCapture = () => {

    const takeImageHandler = async () => {
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
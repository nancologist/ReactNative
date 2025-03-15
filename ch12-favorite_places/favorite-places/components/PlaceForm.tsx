import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useCallback, useState} from "react";
import {COLOR} from "../colors";
import {ImagePicker} from "./ImagePicker";
import {LocationPicker} from "./LocationPicker";
import {BaseButton} from "./UI/BaseButton";
import {Location} from "../screens/Map";

export default function PlaceForm() {
    const [title, setTitle] = useState<string>();
    const [imageUri, setImageUri] = useState<string>();
    const [selectedLocation, setSelectedLocation] = useState<Location>();

    const onTitleChanged = (inputValue: string) => {
        setTitle(inputValue)
    }

    const onImageCaptured = (imageUri: string) => {
        setImageUri(imageUri);
    }

    const onLocationSelected = useCallback((location: Location) => {
        setSelectedLocation(location);
    }, [])

    const onSubmit = () => {
        console.log(title);
        console.log(imageUri);
        console.log(selectedLocation);
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={onTitleChanged} value={title}/>
            </View>
            <ImagePicker onImageCaptured={onImageCaptured}/>
            <LocationPicker onLocationSelected={onLocationSelected}/>
            <BaseButton onPress={onSubmit}>Add Place</BaseButton>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {flex: 1, padding: 24},
    label: {fontWeight: 'bold', marginBottom: 4, color: COLOR.primary500},
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: COLOR.primary700,
        borderBottomWidth: 2,
        backgroundColor: COLOR.primary100
    }
})
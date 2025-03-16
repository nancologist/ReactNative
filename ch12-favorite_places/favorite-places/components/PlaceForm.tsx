import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useCallback, useState} from "react";
import {COLOR} from "../colors";
import {ImagePicker} from "./ImagePicker";
import {LocationPicker} from "./LocationPicker";
import {BaseButton} from "./UI/BaseButton";
import {LocationWithAddress, Place} from "../models/models-and-types";

export default function PlaceForm({onPlaceAdded}: { onPlaceAdded: (place: Place) => void }) {
    const [title, setTitle] = useState<string>();
    const [imageUri, setImageUri] = useState<string>();
    const [locationWithAddress, setLocationWithAddress] = useState<LocationWithAddress>();

    const onTitleChanged = (inputValue: string) => {
        setTitle(inputValue)
    }

    const onImageCaptured = (imageUri: string) => {
        setImageUri(imageUri);
    }

    const onLocationSelected = useCallback((location: LocationWithAddress) => {
        setLocationWithAddress(location);
    }, [setLocationWithAddress])

    const onSubmit = () => {
        if (title && imageUri && locationWithAddress) {
            onPlaceAdded(new Place(title, imageUri, locationWithAddress));
        }
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
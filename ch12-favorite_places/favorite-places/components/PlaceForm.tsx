import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {COLOR} from "../colors";
import {ImagePicker} from "./ImagePicker";
import {LocationPicker} from "./LocationPicker";

export default function PlaceForm() {
    const [title, setTitle] = useState('');
    const onTitleChanged = (inputValue: string) => {
        setTitle(inputValue)
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={onTitleChanged} value={title}/>
            </View>
            <ImagePicker/>
            <LocationPicker/>
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
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {OutlinedButton} from "../components/UI/OutlinedButton";
import {PressEventHandler} from "../types";
import {COLOR} from "../colors";
import {FC, useEffect, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {AppParamList} from "../App";
import {useSQLiteContext} from "expo-sqlite";
import {Place} from "../models/models-and-types";

export const PlaceDetails: FC<NativeStackScreenProps<AppParamList, 'place-details'>> = ({route, navigation}) => {

    const placeId = route.params?.placeId;
    const db = useSQLiteContext();
    const [place, setPlace] = useState<Place>();

    useEffect(() => {
        if (!placeId) {
            throw new Error('placeId undefined!')
        }
        const place = db.getFirstSync<Place>('SELECT *, image_uri as imageUri FROM places WHERE id = ?', placeId)
        if (place == null) {
            throw new Error('NullPointerException! place is null.')
        }
        setPlace(place);
        navigation.setOptions({title: place.title})
    }, [placeId]);

    const onMapBtnPressed: PressEventHandler = () => {
    };

    if (place == undefined) {
        return (
            <View style={styles.fallback}><Text>Loading place data...</Text></View>
        );
    }

    return (
        <ScrollView>

            <Image style={styles.image} source={{uri: place?.imageUri}}/>

            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>ADDRESS</Text>
                </View>
                <OutlinedButton onPress={onMapBtnPressed} icon={'map'}>View on map</OutlinedButton>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    fallback: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: 'center'

    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: COLOR.primary500,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    }
})
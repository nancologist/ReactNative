import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {OutlinedButton} from "../components/UI/OutlinedButton";
import {PressEventHandler} from "../types";
import {COLOR} from "../colors";
import {FC, useEffect} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {AppParamList} from "../App";

export const PlaceDetails: FC<NativeStackScreenProps<AppParamList, 'place-details'>> = ({route}) => {

    const placeId = route.params?.placeId;

    useEffect(() => {
        // fetch the place!
    }, [placeId]);

    const onMapBtnPressed: PressEventHandler = () => {
    };

    return (
        <ScrollView>

            <Image style={styles.image}/>

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
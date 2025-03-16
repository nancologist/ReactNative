import {FlatList, StyleSheet, Text, View} from "react-native";
import {Place} from "../models/models-and-types";
import {COLOR} from "../colors";
import {PlaceListItem} from "./PlaceListItem";

export default function PlaceList({places}: Props) {
    if (places.length === 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallbackText}>No places added yet.</Text>
            </View>
        );
    }

    const onItemPressed = () => {
    };

    return (
        <FlatList
            style={styles.list}
            data={places}
            keyExtractor={item => item.id}
            renderItem={({item}) => <PlaceListItem place={item} onPress={onItemPressed}/>}
        />
    );
}

type Props = {
    places: Place[]
};

const styles = StyleSheet.create({
    list: {
        margin: 24
    },
    fallBackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16,
        color: COLOR.primary200
    }
})
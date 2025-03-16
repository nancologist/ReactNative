import {FlatList, StyleSheet, Text, View} from "react-native";
import {Place} from "../models/models-and-types";
import {COLOR} from "../colors";

export default function PlaceList({places}: Props) {
    if (places.length === 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallbackText}>No places added yet.</Text>
            </View>
        );
    }

    return <FlatList data={places} renderItem={() => <Text>Item!</Text>} keyExtractor={item => item.id}/>;
}

type Props = {
    places: Place[]
};

const styles = StyleSheet.create({
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
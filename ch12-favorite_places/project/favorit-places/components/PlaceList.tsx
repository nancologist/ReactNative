import {FlatList, StyleSheet, Text, View} from "react-native";
import {Place} from "@/models/place";

export default function PlaceList({places}: Props) {
    if (!places || places.length === 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallbackText}>No places added yet.</Text>
            </View>
        );
    }

    return <FlatList data={places} renderItem={} keyExtractor={item => item.id}/>;
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
        fontSize: 16
    }
})
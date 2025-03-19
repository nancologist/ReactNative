import {FlatList, StyleSheet, Text, View} from "react-native";
import {Place} from "../models/models-and-types";
import {COLOR} from "../colors";
import {PlaceListItem} from "./PlaceListItem";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AppParamList} from "../App";

export default function PlaceList({places}: Props) {

    const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>();

    if (places.length === 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallbackText}>No places added yet.</Text>
            </View>
        );
    }

    const onListItemSelected = (placeId: number) => {
        navigation.navigate('place-details', {placeId})
    };

    return (
        <FlatList
            style={styles.list}
            data={places}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PlaceListItem place={item} onPress={onListItemSelected}/>}
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
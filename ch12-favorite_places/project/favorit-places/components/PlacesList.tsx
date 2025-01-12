import {FlatList} from "react-native";
import {Place} from "@/models/place";

type Props = {
    places: Place[]
};

export default function PlacesList(props: Props) {
    return <FlatList data={props.places} renderItem={} keyExtractor={item => item.id}/>;
}
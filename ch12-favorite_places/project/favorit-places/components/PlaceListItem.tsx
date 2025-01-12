import {Place} from "@/models/place";
import {GestureResponderEvent, Image, Pressable, Text, View} from 'react-native';

export function PlaceListItem({place, onPress}: Props) {
    return (
        <Pressable onPress={onPress}>
            <Image source={{uri: place.imageUri}}/>
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    );
}

type Props = {
    place: Place;
    onPress: (event: GestureResponderEvent) => void;
}


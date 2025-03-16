import PlaceList from "../components/PlaceList";
import {FC, useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Place} from "../models/models-and-types";
import {AppParamList} from "../App";

export const AllPlaces: FC<NativeStackScreenProps<AppParamList, 'all-places'>> = ({route}) => {

    const [places, setPlaces] = useState<Place[]>([])

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && route.params) {
            const newPlace = route.params.place;
            setPlaces((prevState) => [...prevState, newPlace]);
        }
    }, [isFocused, route]);

    return <PlaceList places={places}/>;
}
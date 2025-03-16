import PlaceList from "../components/PlaceList";
import {FC, useEffect, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Place, PlaceDAO} from "../models/models-and-types";
import {AppParamList} from "../App";
import {useSQLiteContext} from "expo-sqlite";

export const AllPlaces: FC<NativeStackScreenProps<AppParamList, 'all-places'>> = ({route}) => {

    const db = useSQLiteContext();
    const [places, setPlaces] = useState<Place[]>([])

    useEffect(() => {
        const allPlaces = db.getAllSync<PlaceDAO>('SELECT *, image_uri as imageUri FROM places').map(Place.convertFromDAO)
        setPlaces(allPlaces);
    }, []);

    return <PlaceList places={places}/>;
}
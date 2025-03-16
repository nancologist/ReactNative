import PlaceForm from "../components/PlaceForm";
import {FC} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Place} from "../models/models-and-types";
import {AppParamList} from "../App";
import {insertPlace} from "../database";

export const AddPlace: FC<NativeStackScreenProps<AppParamList, 'add-place'>> = ({navigation}) => {

    const onPlaceAdded = async (place: Place) => {
        try {
            await insertPlace(place)
        } catch (e) {
            throw e;
        }
    }

    return <PlaceForm onPlaceAdded={onPlaceAdded}/>
}
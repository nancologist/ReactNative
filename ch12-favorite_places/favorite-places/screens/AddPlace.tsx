import PlaceForm from "../components/PlaceForm";
import {FC} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ParamListBase} from "@react-navigation/native";
import {Place} from "../models/models-and-types";

export const AddPlace: FC<NativeStackScreenProps<ParamListBase, 'add-place'>> = ({navigation}) => {

    const onPlaceAdded = (place: Place) => {
        // Todo: save it to the device database! (in future episodes)
        // Temporary solution:
        navigation.navigate('all-places', {place})
    }

    return <PlaceForm onPlaceAdded={onPlaceAdded}/>
}
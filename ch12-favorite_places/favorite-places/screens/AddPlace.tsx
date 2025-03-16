import PlaceForm from "../components/PlaceForm";
import {FC} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Place} from "../models/models-and-types";
import {AppParamList} from "../App";

export const AddPlace: FC<NativeStackScreenProps<AppParamList, 'add-place'>> = ({navigation}) => {

    const onPlaceAdded = (place: Place) => {
        // Todo: save it to the device database! (in future episodes)
        // Temporary solution:
        navigation.navigate('all-places', {place}) // fixme: the place is not sent to AllPlaces or maybe it is sent but not handled inside the useEffect there!
    }

    return <PlaceForm onPlaceAdded={onPlaceAdded}/>
}
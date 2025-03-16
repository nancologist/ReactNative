import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, ParamListBase} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackHeaderRightProps, NativeStackNavigationProp} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import {AddPlace} from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {JSX} from "react";
import {COLOR} from "./colors";
import {Map} from "./screens/Map";
import {Place} from "./models/models-and-types";

const Stack = createNativeStackNavigator();

const renderHeaderRight: (
    tintColor: string | undefined,
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>
) => JSX.Element = (tintColor, navigation) => {

    return (
        <IconButton
            icon={'add'}
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate('add-place')}
        />
    );
}

export default function App() {

    return (
        <>
            <StatusBar style={'dark'}/>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {backgroundColor: COLOR.primary500},
                        headerTintColor: COLOR.gray700,
                        contentStyle: {backgroundColor: COLOR.gray700}
                    }}
                >
                    <Stack.Screen
                        name={'all-places'}
                        component={AllPlaces}
                        options={
                            ({navigation}) => {
                                return {
                                    title: 'Your Favorit Places',
                                    headerRight: (props: NativeStackHeaderRightProps) => renderHeaderRight(props.tintColor, navigation)
                                }
                            }
                        }
                    />
                    <Stack.Screen name={'add-place'} component={AddPlace} options={{title: 'Add a new place'}}/>
                    <Stack.Screen name={'map'} component={Map}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export interface RootParamList extends ParamListBase {
    'add-place'?: { latitude: number, longitude: number };
    'all-places'?: { place: Place }
}
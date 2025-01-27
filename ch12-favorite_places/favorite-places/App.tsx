import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, ParamListBase} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackHeaderRightProps, NativeStackNavigationProp} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {JSX} from "react";

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
            onPress={() => navigation.navigate('AddPlace')}
        />
    );
}

export default function App() {
    return (
        <>
            <StatusBar style={'dark'}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'AllPlaces'}
                        component={AllPlaces}
                        options={({navigation}) => {
                            return {
                                headerRight: (props: NativeStackHeaderRightProps) => renderHeaderRight(props.tintColor, navigation)
                            }
                        }}
                    />
                    <Stack.Screen name={'AddPlace'} component={AddPlace}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, ParamListBase} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackHeaderRightProps, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AddPlace} from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {JSX, useCallback, useEffect, useState} from "react";
import {COLOR} from "./colors";
import {Map} from "./screens/Map";
import {AllPlaces} from "./screens/AllPlaces";
import {initDb} from "./database";
import * as SplashScreen from 'expo-splash-screen';
import {View} from "react-native";
import {SQLiteProvider} from "expo-sqlite";
import {PlaceDetails} from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator<AppParamList>();

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

    const [dbReady, setDbReady] = useState(false);

    useEffect(() => {
        (async () => {
            await initDb();
            setDbReady(true);
        })();
    }, [] /* EMPTY ARRAY for Dependencies = Execute this code only the first time the component is rendered. */);

    const onLayoutRootView = useCallback(() => {
        if (dbReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            SplashScreen.hide();
        }
    }, [dbReady]);

    if (!dbReady) {
        return <View onLayout={onLayoutRootView}></View>;
    }

    return (
        <SQLiteProvider databaseName={'favorite-places.db'}>
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
                    <Stack.Screen name={'place-details'} component={PlaceDetails}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SQLiteProvider>
    );
}

export type AppParamList = {
    'map': undefined
    'add-place': { latitude: number, longitude: number } | undefined;
    'all-places': undefined;
    'place-details': { placeId: number } | undefined;
}
import {Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {StatusBar} from 'expo-status-bar';
import IconButton from './components/UI/IconButton';
import {GlobalStyles} from './constants/styles';
import AllExpenses from './screens/AllExpenses'
import ManageExpense from './screens/ManageExpense'
import RecentExpenses from './screens/RecentExpenses'
import {ExpensesContext, ExpensesContextProvider} from "./store/expenses-context";
import {useContext, useEffect, useState} from "react";
import {AppApi} from "./api";
import {LoadingOverlay} from "./components/UI/LoadingOverlay";
import {ErrorOverlay} from "./components/UI/ErrorOverlay";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    const expensesCtx = useContext(ExpensesContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState();

    useEffect(() => {
        fetchAllExpenses();
    }, []);

    const fetchAllExpenses = async () => {
        setIsLoading(true);
        try {
            const data = await AppApi.getExpenses();
            expensesCtx.onAllExpensesFetched(data);
        } catch (err) {
            setError('Could not fetch expenses!')
        }
        setIsLoading(false);
    }

    const closeError = () => {
        setError(null)
    };

    if (error && !isLoading) {
        return <ErrorOverlay message={error} onConfirm={closeError}/>
    }

    if (isLoading) {
        return <LoadingOverlay/>;
    }

    return (
        <BottomTabs.Navigator screenOptions={({navigation}) => ({
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            headerRight: ({tintColor}) => <IconButton
                iconName={'add'}
                size={24}
                color={tintColor} // tintColor is the value of the headerTintColor which react provides for us!
                pressHandler={() => {
                    navigation.navigate('ManageExpense')
                }}
            />
        })}>
            <BottomTabs.Screen
                name={'RecentExpenses'}
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({color, size}) => <Ionicons name={'hourglass'} size={size} color={color}/>
                }}
            />
            <BottomTabs.Screen
                name={'AllExpenses'}
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: ({color, size}) => <Ionicons name={'calendar'} size={size} color={color}/>
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (<>

        {/* This is the status bar you see above your cellphone, e.g. the notification, battery and Wi-Fi symbols! */}
        <StatusBar style="light"/>

        <ExpensesContextProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                        headerTintColor: 'white'
                    }}
                >
                    <Stack.Screen name={'ExpensesOverview'} component={ExpensesOverview} options={{headerShown: false}}/>
                    <Stack.Screen name={'ManageExpense'} component={ManageExpense} options={{
                        presentation: 'modal'
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ExpensesContextProvider>

    </>);
}

import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Text} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types/types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import CommentsScreen from "../screens/PostScreens/CommentsScreen";
import Colors from "../constants/Colors";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{
                headerTitle: () => {
                    return <Text style={{color: Colors.dark.text, fontSize: 18}}>Comments</Text>
                }
            }}/>
            <Stack.Screen name="Comments" component={CommentsScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
        </Stack.Navigator>
    );
}

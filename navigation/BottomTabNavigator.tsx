import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Text} from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddNewPost from '../screens/AddNewPost';
import LikesScreen from "../screens/LikesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
    AddPictureStackNavigatorParamList,
    BottomTabParamList,
    HomeNavigatorParamList,
    SearchNavigatorParamList,
    LikesStackNavigatorParamList,
    ProfileStackNavigatorParamList
} from '../types/types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint, showLabel: false}}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="search" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="AddPicture"
                component={AddPictureNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="add-outline" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="Likes"
                component={LikesTabNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="heart" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileTabNavigator}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-circle" color={color} size={30}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerTitle: () => {
                        return <Text style={{color: Colors.dark.text, fontSize: 18}}>Pringo</Text>
                    },
                    headerTitleAlign: 'left',
                    headerRight: () => {
                        return <Ionicons name={"ios-send"} size={30} color={Colors.dark.tint}/>
                    },
                    headerRightContainerStyle: {
                        marginRight: 15
                    },
                    headerLeftContainerStyle: {
                        marginLeft: 15
                    },
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<SearchNavigatorParamList>();

function SearchNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{headerTitle: 'Search Screen'}}
            />
        </TabTwoStack.Navigator>
    );
}

const AddPictureStack = createStackNavigator<AddPictureStackNavigatorParamList>();

function AddPictureNavigator() {
    return (
        <AddPictureStack.Navigator>
            <AddPictureStack.Screen
                name="AddPictureScreen"
                component={AddNewPost}
                options={{headerTitle: 'Add Post'}}
            />
        </AddPictureStack.Navigator>
    );
}

const LikesTabStack = createStackNavigator<LikesStackNavigatorParamList>();

function LikesTabNavigator() {
    return (
        <LikesTabStack.Navigator>
            <LikesTabStack.Screen
                name="LikesScreen"
                component={LikesScreen}
                options={{headerTitle: 'Likes Screen'}}
            />
        </LikesTabStack.Navigator>
    );
}

const ProfileTabStack = createStackNavigator<ProfileStackNavigatorParamList>();

function ProfileTabNavigator() {
    return (
        <ProfileTabStack.Navigator>
            <ProfileTabStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{headerTitle: 'Profile Screen'}}
            />
        </ProfileTabStack.Navigator>
    );
}
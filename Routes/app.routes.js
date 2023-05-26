import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

import Header from "../Components/Header";
import BtnAdd from "../Components/BtnAdd";
import Feed from "../Views/Feed";
import Friends from "../Views/Friends";
import Chat from "../Views/Chat";
import Notification from "../Views/Pages/Notification";
import Profile from "../Views/Profile";
import New from "../Views/New";

const Tabs = (props) => {

    return (
        <Tab.Navigator
            tabBarVisible={true}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarVisible: true
            }}
        >
            <Tab.Screen name="Inicio" options={{
                headerShown: true,
                headerTitle: (rest) => <Header {...rest} width={props.width} />,
                tabBarActiveTintColor: '#FF9900',
                detachInactiveScreens: false,
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" color={color} size={size} />
                ),
            }} >
                {rest => <Feed {...rest} height={props.height} width={props.width} />}
            </Tab.Screen>

            <Tab.Screen name="Amigos" options={{
                headerShown: true,
                headerTitle: (rest) => <Header {...rest} height={props.height} width={props.width} />,
                tabBarLabel: 'Amigos',
                tabBarActiveTintColor: '#FF9900',
                tabBarBadge: 3,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="supervisor-account" color={color} size={size} />
                ),
            }} >
                {rest => <Friends {...rest} height={props.height} width={props.width} />}
            </Tab.Screen>

            <Tab.Screen name="New" options={{
                headerShown: false,
                headerTitle: 'Nova Publicação',
                tabBarLabel: '',
                tabBarActiveTintColor: '#fff',
                tabBarInActiveTintColor: '#fff',

                tabBarIcon: ({ color, size, focused }) => (
                    <BtnAdd name="add" color={color} size={size} focused={focused} data={props} />
                ),
            }} >
                {rest => <New {...rest} height={props.height} width={props.width} />}
            </Tab.Screen>

            <Tab.Screen name="Chat" options={{
                headerShown: true,
                headerTitle: 'Teste3',
                tabBarLabel: 'Notificação',
                tabBarBadge: 3,
                tabBarActiveTintColor: '#FF9900',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-chatbubbles-sharp" color={color} size={size} />
                ),
            }} >
                {rest => <Chat {...rest} height={props.height} width={props.width} />}
            </Tab.Screen>

            <Tab.Screen name="Perfil" options={{
                headerShown: false,
                headerTitle: '',
                tabBarLabel: 'Perfil',
                tabBarActiveTintColor: '#FF9900',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
            }} >
                {rest => <Profile {...rest} height={props.height} width={props.width} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
};

const AppRoutes = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                options={{
                    headerShown: false
                }}
            >
                {rest => <Tabs {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Amigos"
            >
                {rest => <Friends {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="New"
            >
                {rest => <New {...rest} height={props.height} width={width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Notificação"
            >
                {rest => <Notification {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Perfil"
            >
                {rest => <Profile {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>
        </Stack.Navigator>

    )
};

export default AppRoutes;
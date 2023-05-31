import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

import Header from "../Components/Header";
import HeaderChat from "../Components/HeaderChat";
import BtnAdd from "../Components/BtnAdd";
import Feed from "../Views/Feed";
import Friends from "../Views/Friends";
import Chat from "../Views/Chat";
import Profile from "../Views/Profile";
import New from "../Views/New";

///Pages
import EditProfile from "../Views/Pages/Pages_Config/EditProfile";
import Message from "../Views/Pages/Message";
import ConfigPrivacy from "../Views/Pages/Pages_Config/ConfigPrivacy";
import Account from "../Views/Pages/Pages_Config/Account";
import Privacy from "../Views/Pages/Pages_Config/Privacy";
import Security from "../Views/Pages/Pages_Config/Security";
import Notifications from "../Views/Pages/Pages_Config/Notifications";
import OnNotification from "../Views/Pages/onNotification";
import Password from "../Views/Pages/Pages_Config/Password";
import Delete_isabled from "../Views/Pages/Pages_Config/Delete_isabled";
import Comments from "../Views/Pages/Pages_Config/Comments";
import MyData from "../Views/Pages/Pages_Config/MyData";
import Blocked from "../Views/Pages/Pages_Config/Blocked";
import Mentions from "../Views/Pages/Pages_Config/Mentions";
import Sharing from "../Views/Pages/Pages_Config/Sharing";
import Story from "../Views/Pages/Pages_Config/Story";

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
                headerTitle: (rest) => <Header {...rest} data={props} />,
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
                // headerTitle: (rest) => <Header {...rest} height={props.height} width={props.width} />,
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
                headerTitle: 'Messages',
                tabBarLabel: 'Chat',
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
                name="OnNotification"
            >
                {rest => <OnNotification {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Perfil"
            >
                {rest => <Profile {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="EditProfile"
                options={{
                    headerTitle: 'Editar Perfil',
                }}
            >
                {rest => <EditProfile {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="ConfigPrivacy"
                options={{
                    headerTitle: 'Configuração e Privacidade',
                }}
            >
                {rest => <ConfigPrivacy {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Account"
                options={{
                    headerTitle: 'Minha Conta',
                }}
            >
                {rest => <Account {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Privacy"
                options={{
                    headerTitle: 'Privacidade',
                }}
            >
                {rest => <Privacy {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Security"
                options={{
                    headerTitle: 'Segurança',
                }}
            >
                {rest => <Security {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Notifications"
                options={{
                    headerTitle: 'Notificações',
                }}
            >
                {rest => <Notifications {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Password"
                options={{
                    headerTitle: 'Senha',
                }}
            >
                {rest => <Password {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Delete_isabled"
                options={{
                    headerTitle: 'Desativar / Deletar ',
                }}
            >
                {rest => <Delete_isabled {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Comments"
                options={{
                    headerTitle: 'Comentários',
                }}
            >
                {rest => <Comments {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="MyData"
                options={{
                    headerTitle: 'Meus dados',
                }}
            >
                {rest => <MyData {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Blocked"
                options={{
                    headerTitle: 'Bloqueados',
                }}
            >
                {rest => <Blocked {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Mentions"
                options={{
                    headerTitle: 'Menções',
                }}
            >
                {rest => <Mentions {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Sharing"
                options={{
                    headerTitle: 'Compartilhamento',
                }}
            >
                {rest => <Sharing {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Story"
                options={{
                    headerTitle: 'Resposta no Story',
                }}
            >
                {rest => <Story {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>

            <Stack.Screen
                name="Message"
                options={{
                    headerTitle: 'Message',
                    headerTitle: (rest) => <HeaderChat {...rest} data={props} title='Lorrane Maica' Photo={'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'} />
                }}
            >
                {rest => <Message {...rest} height={props.height} width={props.width} />}
            </Stack.Screen>
        </Stack.Navigator>

    )
};

export default AppRoutes;
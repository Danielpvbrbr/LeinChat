import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const HeaderGoTo = (props) => {
    const backGo = () => {
        // props.navigation.goBack();
        props.navigation.navigate('New');
    };

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.header, { width: props.width - 34 }]}>
                <Pressable style={Styles.title} onPress={backGo} >
                    <AntDesign name="left" size={20} color="black" />
                    <Text style={{ fontSize: 16, marginLeft: 13 }}>{props.title}</Text>
                </Pressable>
                <View style={Styles.NvIcon}>
                    <Ionicons name="search" size={26} color="#585858" />
                    <Ionicons name="notifications" size={26} color="#585858" />
                </View>
            </View>
        </View>
    )
};

export default HeaderGoTo;

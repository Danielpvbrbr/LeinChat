import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './styles';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import PhotoProfile from '../PhotoProfile';
const HeaderChat = (props) => {

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.header, { width: props.data.width - 34 }]}>
                <Pressable style={Styles.title} onPress={() => alert()} >
                    <PhotoProfile Img={props.Photo} />
                    <Text style={{ fontSize: 16, marginLeft: 13 }}>{props.title}</Text>
                </Pressable>
                <View style={Styles.NvIcon}>
                    <MaterialCommunityIcons name="hours-24" size={26} color="#F4E2C7" />
                    <Entypo name="dots-three-vertical" size={20} color="black" />
                </View>
            </View>
        </View>
    )
};

export default HeaderChat;

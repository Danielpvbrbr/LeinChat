import React from 'react';
import { Image, View } from 'react-native';
import { Styles } from './styles';
import logo from '../../assets/logo/LeinChat.png'
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {
    return (
        <View style={[Styles.container, { width: props.data.width - 34 }]}>
            <Image style={Styles.logo} source={logo} />
            <View style={Styles.NvIcon}>
                <Ionicons name="search" size={26} color="#585858" />
                <Ionicons name="notifications" size={26} color="#585858" onPress={() => props.data.navigation.navigate('OnNotification')} />
            </View>
        </View>
    )
};

export default Header;

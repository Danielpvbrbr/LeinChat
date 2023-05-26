import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles';
// import Button from '../../../../Components/Button';
// import Logo from '../../../../assets/logo/Logo.png';

const Notification = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Styles.Container}>
            <Text>Notification</Text>
        
        </View>
    )
};

export default Notification;
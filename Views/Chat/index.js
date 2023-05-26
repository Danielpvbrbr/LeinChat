import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles';

const Chat = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Styles.Container}>
            <Text>Chat</Text>
        </View>
    )
};

export default Chat;
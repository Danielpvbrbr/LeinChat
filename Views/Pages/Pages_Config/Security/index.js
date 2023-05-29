import React, { useState } from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Styles } from './styles';
import {
    Entypo,
} from '@expo/vector-icons';

const Security = (props) => {
    const [time, setTime] = useState(false);

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Password')}>
                    <View style={Styles.button}>
                        <Entypo name="lock" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Senha</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>
            </View>
        </View>
    )
};

export default Security;
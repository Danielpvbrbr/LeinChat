import React, { useState } from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Styles } from './styles';
import {
    Entypo,
} from '@expo/vector-icons';
import InputBorderBottom from '../../../../Components/InputBorderBottom';

const Password = (props) => {
    const [user, setUser] = useState(false);

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <InputBorderBottom
                    title='Senha atual'
                    secureTextEntry={false}
                    placeholder=''
                    width={props.width - 35}
                    height={27}
                    marginBottom={10}
                    onChangeText={setUser}
                    value={user}
                    iconName=''
                    iconSize={0}
                    iconColor=''
                />
                <InputBorderBottom
                    title='Nova Senha '
                    secureTextEntry={false}
                    placeholder=''
                    width={props.width - 35}
                    height={27}
                    marginBottom={10}
                    onChangeText={setUser}
                    value={user}
                    iconName=''
                    iconSize={0}
                    iconColor=''
                />
                <InputBorderBottom
                    title='Confirme a Senha'
                    secureTextEntry={false}
                    placeholder=''
                    width={props.width - 35}
                    height={27}
                    marginBottom={10}
                    onChangeText={setUser}
                    value={user}
                    iconName=''
                    iconSize={0}
                    iconColor=''
                />
            </View>
        </View>
    )
};

export default Password;
import React, { useState } from 'react';
import { View} from 'react-native';
import { Styles } from './styles';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
import InputBorderBottom from '../../../../Components/InputBorderBottom';

const MyData = (props) => {
    const [user, setUser] = useState('');


    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <InputBorderBottom
                    title='E-mail'
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
                    title='Telefone'
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
                    title='Data de Nascimento'
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

export default MyData;
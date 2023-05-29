import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import InputBorderBottom from '../../../Components/InputBorderBottom';
import Button from '../../../Components/Button';

const SignUp = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Styles.Container}>
            <View style={Styles.Area}>
                <Image
                    style={Styles.Logo}
                    source={require('./../../../assets/logo/LeinChat.png')}

                />
                <View style={Styles.Form}>
                    <InputBorderBottom
                        title='Email ou Usuario'
                        secureTextEntry={false}
                        placeholder=''
                        onChangeText={setUser}
                        value={user}
                        width={330}
                        height={40}
                        marginBottom={22}
                        iconName=''
                        iconSize={0}
                        iconColor=''
                    />

                    <InputBorderBottom
                        title='Senha'
                        secureTextEntry={true}
                        placeholder=''
                        onChangeText={setPassword}
                        value={password}
                        width={330}
                        height={40}
                        iconName='eye'
                        iconSize={20}
                        iconColor='#999999'
                    />

                    <Text style={Styles.TextForgot}>Esqueci a senha?</Text>

                </View>
                <View style={Styles.AreaButton}>
                    <Button
                        text='Acessar'
                        color='#fff'
                        background='#FF9900'
                        width={330}
                        height={40}
                        onPress={() => alert('s')}
                    />
                    <Button
                        text='Registrar'
                        color='#fff'
                        background='#FFD390'
                        width={330}
                        height={40}
                        onPress={() => alert('s')}
                    />
                </View>
            </View>
        </View>
    )
};

export default SignUp;
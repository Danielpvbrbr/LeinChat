import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import InputBorderBottom from '../../../Components/InputBorderBottom';
import Button from '../../../Components/Button';
import Logo from '../../../assets/logo/Logo.png';

const SignIn = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Styles.Container}>
            <View style={Styles.Area}>
                <Image source={Logo} />
                <View style={Styles.Form}>
                    <InputBorderBottom
                        title='Nome'
                        secureTextEntry={false}
                        placeholder=''
                        onChangeText={setName}
                        value={name}
                        inputMode='text'
                        keyboardType='default'
                        iconName=''
                        iconSize={0}
                        iconColor=''
                    />

                    <InputBorderBottom
                        title='Usuário'
                        secureTextEntry={false}
                        placeholder=''
                        onChangeText={setUser}
                        value={user}
                        keyboardType='default'
                        inputMode='text'
                        iconName=''
                        iconSize={0}
                        iconColor=''
                    />

                    <InputBorderBottom
                        title='Email'
                        secureTextEntry={false}
                        placeholder=''
                        onChangeText={setEmail}
                        value={email}
                        inputMode='email'
                        keyboardType='email-address'
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
                        inputMode='text'
                        keyboardType='default'
                        iconName='eye'
                        iconSize={20}
                        iconColor='#999999'
                    />
                </View>
                <View style={Styles.AreaButton}>
                    <Button
                        text='Registrar'
                        color='#fff'
                        background='#FFD390'
                        width={330}
                        height={40}
                        onPress={() => alert('s')}
                    />
                    <Text style={Styles.Term}>
                        O clicar em registrar significa que você concorda com os
                        <Text onPress={() => alert('Termo')} style={Styles.textBlue}>Termos de Uso</Text>,
                        <Text onPress={() => alert('Polit')} style={Styles.textBlue}>Política de Privacidade</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
};

export default SignIn;
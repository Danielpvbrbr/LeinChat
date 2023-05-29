import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './styles';
import { Ionicons, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


const ConfigPrivacy = (props) => {

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <Text style={Styles.title}>Conta</Text>
                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Account')}>
                    <View style={Styles.button}>
                        <Ionicons name="person" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Minha Conta</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Privacy')}>
                    <View style={Styles.button}>
                        <MaterialIcons name="privacy-tip" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Privacidade</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Security')}>
                    <View style={Styles.button}>
                        <MaterialIcons name="security" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Segurança</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Text style={Styles.title}>Conteúdo</Text>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Notifications')}>
                    <View style={Styles.button}>
                        <Ionicons name="notifications" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Notificações</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Text style={Styles.title}>Falhas e problemas</Text>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <MaterialIcons name="support-agent" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Suporte</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <FontAwesome5 name="clipboard-list" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Termos e Políticas</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>
            </View>
        </View>
    )
};

export default ConfigPrivacy;
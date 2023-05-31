import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './styles';
import { Ionicons, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


const Account = (props) => {

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('MyData')}>
                    <View style={Styles.button}>
                        <MaterialIcons name="data-usage" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Meus dados</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Delete_isabled')}>
                    <View style={Styles.button}>
                        <MaterialIcons name="auto-delete" size={15} color="black" />
                        <Text style={Styles.textbtn}>Desativar / Deletar</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>
            </View>
        </View>
    )
};

export default Account;
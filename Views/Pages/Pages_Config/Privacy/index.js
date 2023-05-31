import React, { useState } from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Styles } from './styles';
import {
    Entypo,
    MaterialIcons,
    FontAwesome,
    EvilIcons,
    AntDesign
} from '@expo/vector-icons';


const Privacy = (props) => {
    const [time, setTime] = useState(false);

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <MaterialIcons name="data-usage" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Conta Privado </Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Blocked')}>
                    <View style={Styles.button}>
                        <Entypo name="block" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Bloqueados</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Text style={{ fontSize: 14, color: '#999999', margin: 10 }}>Quem pode ver ?</Text>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Comments')}>
                    <View style={Styles.button}>
                        <FontAwesome name="comment" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Comentários</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Mentions')}>
                    <View style={Styles.button}>
                        <AntDesign name="enter" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Menções</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Sharing')}>
                    <View style={Styles.button}>
                        <FontAwesome name="share" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Compartilhamento</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('Comments')}>
                    <View style={Styles.button}>
                        <FontAwesome name="history" size={15} color="#999999" />
                        <Text style={Styles.textbtn}>Resposta no Story</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="#999999" />
                </Pressable>
            </View>
        </View>
    )
};

export default Privacy;
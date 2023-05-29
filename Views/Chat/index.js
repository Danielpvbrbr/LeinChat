import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import PhotoProfile from '../../Components/PhotoProfile';
const Chat = (props) => {
    const [search, setSearch] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Styles.Container}>
            <View style={[Styles.area, { width: props.width }]}>
                <View style={Styles.search}>
                    <TextInput
                        style={Styles.input}
                        onChangeText={setSearch}
                        value={search}
                        inputMode={'search'}
                        keyboardType={'web-search'}
                        placeholder={'Pesquisar'}
                    />
                    <Ionicons name="filter" size={24} color="black" />
                </View>
                <View style={Styles.list}>
                    <TouchableOpacity style={Styles.line} >
                        <PhotoProfile Img={'https://aloalobahia.com/images/p/giseeeeeelevivara_alo_alo_bahia.jpg'} />
                        <View style={Styles.lineInfo}>
                            <Text>Lorrane Maica</Text>
                            <Text>Oi estou amando usar o LeinChat</Text>
                        </View>
                        <View style={Styles.online} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default Chat;
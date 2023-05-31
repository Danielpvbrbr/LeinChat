import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Styles } from './styles';
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import EmojiModal from 'react-native-emoji-modal';

const Message = (props) => {
    const [msg, setMsg] = useState('');
    const [show, setShow] = useState(false);

    return (
        <View style={Styles.Container}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <View style={[Styles.areaMsg, { width: props.width - 35 }]}>
                    <Pressable style={[Styles.msg, {
                        alignSelf: false ? 'flex-end' : 'flex-start',
                        borderTopStartRadius: false ? 13 : 0,
                        borderBottomEndRadius: true ? 13 : 0,
                        backgroundColor: false ? '#FF9900' : '#ffff',
                    }]}>
                        <Text style={[Styles.text, { color: false ? '#fff' : '#666666' }]}>Oi estou amando</Text>
                        <Text style={[Styles.textMsg, { color: false ? '#fff' : '#666666' }]}>10:44</Text>
                    </Pressable>

                    <Pressable style={[Styles.msg, {
                        alignSelf: true ? 'flex-end' : 'flex-start',
                        borderTopStartRadius: true ? 13 : 0,
                        borderBottomEndRadius: false ? 13 : 0,
                        backgroundColor: true ? '#FF9900' : '#ffff',
                    }]}>
                        <Text style={[Styles.text, { color: true ? '#fff' : '#666666' }]}>Oi</Text>
                        <Text style={[Styles.textMsg, { color: true ? '#fff' : '#666666' }]}>10:44</Text>
                    </Pressable>
                    {/* <Pressable style={[Styles.emojiArea]}>
                        <EmojiModal onEmojiSelected={(emoji) => console.log(emoji)} />
                    </Pressable> */}
                </View>
                <View style={[Styles.areaTextMsg, { width: props.width }]}>
                    <View style={Styles.areaInputMsg}>
                        <Entypo name="emoji-flirt" size={24} color="#FF9900" style={Styles.iconEmoji} />

                        <TextInput
                            style={[Styles.inputMsg]}
                            onChangeText={setMsg}
                            value={msg}
                            inputMode='text'
                            keyboardType={'default'}
                            placeholder='Mensagem'
                        />
                        <Entypo name="email" size={24} color="#FF9900" />
                        <Ionicons name="image" size={24} color="#FF9900" />
                    </View>
                    <MaterialIcons name="keyboard-voice" size={30} color="#FF9900" />
                </View>

            </View>
        </View>
    )
};

export default Message;
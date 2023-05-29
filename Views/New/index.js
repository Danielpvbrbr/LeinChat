import React, { useEffect, useState } from 'react';
import { View, Image, Modal, Switch, Text, Pressable, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import img from '../../assets/Example/StockSnap_26ESMVYWAN.jpg'

const New = (props) => {
    const [image, setImage] = useState(null);
    // const [isModal, setIsModal] = useState(true);
    const [text, setText] = useState('');
    const [visibility, setVisibility] = useState('');
    const [isComments, setIsComments] = useState(false);
    const [time, setTime] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={[Styles.container, { width: props.width }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}
                style={[Styles.area, { width: props.width - 35 }]}
            >
                {/* <HeaderGoTo width={props.width} title='Nova Publicação' navigation={props.navigation} /> */}
                <View style={[Styles.areaContent, { width: props.width - 35 }]}>
                    <Image source={img} style={Styles.img} />
                </View>
                <View style={Styles.areaImg}>
                    <TouchableOpacity style={Styles.imgMin}>
                        <Image source={img} style={Styles.imgMin} />
                    </TouchableOpacity>

                    <Pressable style={Styles.imgMin}>
                        {false ?
                            <FontAwesome name="camera" size={24} color="#FF9900" />
                            :
                            <Ionicons name="add" size={30} color="#FF9900" />
                        }
                    </Pressable>
                </View>
                <View style={[Styles.form, { width: props.width - 35 }]}>
                    <TextInput
                        style={Styles.input}
                        onChangeText={setText}
                        value={text}
                        editable={true}
                        multiline={true}
                        numberOfLines={5}
                        textAlignVertical='top'
                        placeholder="Em que você esta pensando?"
                    />
                    <View style={[Styles.option, { width: props.width - 35 }]}>
                        <View style={[Styles.select]}>
                            <Text>Quem pode ver</Text>
                            <Picker
                                selectedValue={visibility}
                                style={{ height: 30, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setVisibility(itemValue)}
                            >
                                <Picker.Item label="Todos" value="all" />
                                <Picker.Item label="Amigos" value="friends" />
                                <Picker.Item label="Ninguém" value="nobody" />
                            </Picker>
                        </View>
                        <View style={[Styles.select]}>
                            <Text>Permitir comentarios </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#D9D9D9" }}
                                thumbColor={isComments ? "#FF9900" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={setIsComments}
                                value={isComments}
                            />
                        </View>
                        <View style={[Styles.select]}>
                            <Text>Marcar Amigos</Text>
                        </View>
                        <View style={[Styles.select]}>
                            <Text>Exclusão Automática em 24h</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#D9D9D9" }}
                                thumbColor={time ? "#FF9900" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={setTime}
                                value={time}
                            />
                        </View>
                        <Pressable style={[Styles.button, { width: props.width - 35 }]}>
                            <View style={Styles.areaButton}>
                                <Text style={Styles.textButton}>Avançar</Text>
                            </View>

                            <MaterialCommunityIcons name="hours-24" size={24} color="#FFF" />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default New;
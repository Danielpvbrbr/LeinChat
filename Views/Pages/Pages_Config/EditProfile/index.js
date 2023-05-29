import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, FlatList, ScrollView } from 'react-native';
import { Styles } from './styles';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
import PhotoProfileEdt from '../../../../Components/PhotoProfileEdt';
import InputBorderBottom from '../../../../Components/InputBorderBottom';
import { Picker } from '@react-native-picker/picker';

const EditProfile = (props) => {
    const [user, setUser] = useState('Rafaella Samira');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <View style={[Styles.areaPhoto]}>
                    <PhotoProfileEdt img={'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'} />
                </View>

                <View style={[Styles.areaOption]}>
                    <InputBorderBottom
                        title='Nome'
                        secureTextEntry={false}
                        placeholder=''
                        width={props.width - 35}
                        marginBottom={10}
                        height={27}
                        onChangeText={setUser}
                        value={user}
                        iconName=''
                        iconSize={0}
                        iconColor=''
                    />
                    <InputBorderBottom
                        title='Nome de usuário'
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
                        title='Biografia'
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
                    <View style={[Styles.select, { width: props.width - 35 }]}>
                        <Text>Gênero</Text>
                        <Picker
                            selectedValue={gender}
                            style={{ height: 30, width: props.width - 35 }}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Masculino" value="masculine" />
                            <Picker.Item label="Feminino" value="feminine" />
                            <Picker.Item label="Personalizar" value="personalize" />
                        </Picker>
                    </View>
                    <View style={[Styles.select, { width: props.width - 35 }]}>
                        <Text>Categoria</Text>
                        <Picker
                            selectedValue={category}
                            style={{ height: 30, width: props.width - 35 }}
                            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                        >
                            <Picker.Item label="Masculino" value="masculine" />
                            <Picker.Item label="Feminino" value="feminine" />
                            <Picker.Item label="Personalizar" value="personalize" />
                        </Picker>
                    </View>
                    <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('ConfigPrivacy')}>
                        <View style={Styles.button}>
                            <Ionicons name="settings" size={15} color="#999999" />
                            <Text style={Styles.textbtn}>Configuração avançada</Text>
                        </View>
                        <Entypo name="chevron-right" size={20} color="#999999" />
                    </Pressable>
                    <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                        <View style={Styles.button}>
                            <Feather name="log-out" size={15} color="#999999" />
                            <Text style={Styles.textbtn}>Sair da conta</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
        </View>
    )
};

export default EditProfile;
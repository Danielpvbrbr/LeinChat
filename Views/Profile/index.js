import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, FlatList, ScrollView } from 'react-native';
import { Styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import img from '../../assets/Example/StockSnap_26ESMVYWAN.jpg';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../Components/Button';
import Publication from '../../Components/Publication';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Julia gabru',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: true,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'
        }]
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Marmore jane',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: false,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'
        }]
    }
];
const Profile = (props) => {
    const [selectedId, setSelectedId] = useState();


    return (
        <View style={[Styles.container]}>
            <ScrollView style={{ width: props.width }}>
                <View style={Styles.areaImg}>
                    <Image source={img} style={[Styles.coverPhoto, { width: props.width }]} />
                    <TouchableOpacity style={Styles.camCoverIco}>
                        <Entypo name="camera" size={15} color="#fff" />
                    </TouchableOpacity>

                    <LinearGradient
                        start={{ x: 0.0, y: 0.1 }}
                        end={{ x: 0.1, y: 1.0 }}
                        colors={['#FF9900', '#00FFF0']}
                        style={Styles.ciclePerfil}
                    >
                        <Image source={img} style={Styles.photoPerfil} />
                        <TouchableOpacity style={Styles.camIco}>
                            <Entypo name="camera" size={15} color="#fff" />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={[Styles.area, { width: props.width }]}>
                    <View style={[Styles.areaPerfil, { width: props.width - 28 }]}>
                        <View style={[Styles.areaEscorts]}>
                            <Pressable style={Styles.escorts}>
                                <Text style={Styles.titleEscorts}>Acompanhates</Text>
                                <Text style={Styles.textEscorts}>200k</Text>
                            </Pressable>
                            <Pressable style={Styles.escorts}>
                                <Text style={Styles.titleEscorts}>Acompanho</Text>
                                <Text style={Styles.textEscorts} >406</Text>
                            </Pressable>
                        </View>
                        <View style={[Styles.areaInfoPerfil]}>
                            <Text style={Styles.name} >Rafaella Samira</Text>
                            <TouchableOpacity>
                                <Text style={Styles.user}>@rafaellasamira</Text>
                            </TouchableOpacity>
                            <Text style={Styles.bio}>Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.</Text>
                        </View>
                    </View>

                    <View style={{ width: props.width, borderWidth: 0.2, borderColor: '#E7E5E5' }} />
                    
                    <View style={[Styles.areaButton, { width: props.width - 28 }]}>
                        <Button
                            text='Acompanhar'
                            color='#fff'
                            background='#FF9900'
                            width={170}
                            height={40}
                            onPress={() => alert('s')}
                        />
                        <Button
                            text='Mensagem'
                            color='#585858'
                            background='#E7E5E5'
                            width={170}
                            height={40}
                            onPress={() => alert('s')}
                        />
                    </View>
                </View>
                <View style={[{ width: props.width }]} >
                    <FlatList
                        data={DATA}
                        renderItem={data => <Publication Photo={data.item.data[0].img} width={props.width}  {...data} />}
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>

        </View>
    )
};

export default Profile;
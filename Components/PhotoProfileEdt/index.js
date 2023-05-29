import React from 'react';
import { Image, Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Styles } from './styles';

const PhotoProfile = (props) => {

    return (

        <LinearGradient
            start={{ x: 0.0, y: 0.1 }}
            end={{ x: 0.1, y: 1.0 }}
            colors={['#FF9900', '#00FFF0']}
            style={Styles.ciclePerfil}
        >
            <Image source={{ uri: props.img }} style={Styles.photoPerfil} />
            <TouchableOpacity style={Styles.camIco}>
                <Entypo name="camera" size={15} color="#fff" />
            </TouchableOpacity>
        </LinearGradient>

    )
};
export default PhotoProfile;

import React from 'react';
import {  Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Styles } from './styles';

const PhotoProfile = (props) => {

    return (
        <Pressable style={Styles.container} onPress={() => alert('story')}>
            <LinearGradient
                start={{ x: 0.0, y: 0.1 }}
                end={{ x: 0.1, y: 1.0 }}
                colors={['#FF9900', '#00FFF0']}
                style={Styles.gradient}
            >
                <Image
                    style={Styles.photo}
                    source={{ uri: props.Img }}
                />
            </LinearGradient>
        </Pressable>
    )
};
export default PhotoProfile;

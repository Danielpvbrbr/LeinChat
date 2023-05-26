import React, { useState } from 'react';
import { Text, Image, View, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Styles } from './styles';
import PhotoProfile from '../PhotoProfile';

const Publication = (props) => {
    const [favorite, setFavorite] = useState(false);
    const [like, setLike] = useState(false);
    const [isView, setisView] = useState(true);

    return (
        <Pressable
            style={[Styles.container, { width: props.width, height: props.width }]}
            onPressIn={() => setisView(false)}
            onPressOut={() => setisView(true)}
        >
            {isView && <View style={[Styles.header, { width: props.width }]}>
                <View style={Styles.profile}>
                    <PhotoProfile Img={props.Photo} />
                    <Text style={Styles.name} numberOfLines={1} ellipsizeMode={'tail'}>Mirela Albim</Text>
                </View>
                <Entypo name="dots-three-vertical" size={22} color="#fff" />
            </View>}
            <Image
                style={{
                    width: props.width,
                    height: props.width,
                }}
                source={{ uri: props.item.data[0].img }}
            />
            {isView && <View style={[Styles.footer, { width: props.width }]} >
                <View style={[Styles.nvIcon, { width: props.width - 13 }]}>
                    <View style={Styles.nvIcon}>
                        {like ?
                            <AntDesign name="star" size={26} color="#FF9900" onPress={() => setLike(!like)} />
                            :
                            <AntDesign name="staro" size={26} color="#fff" onPress={() => setLike(!like)} />
                        }
                        <Ionicons name="chatbubble" size={26} color="#fff" />
                        <FontAwesome name="send" size={26} color="#fff" />
                    </View>
                    {favorite ?
                        <Ionicons name="bookmark-sharp" size={26} color="#FF9900" onPress={() => setFavorite(!favorite)} />
                        :
                        <Ionicons name="bookmark-outline" size={26} color="#fff" onPress={() => setFavorite(!favorite)} />
                    }
                </View>
                <Text style={Styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View>}
        </Pressable>
    )
};
export default Publication;

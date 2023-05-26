import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Styles } from './styles';
import { Octicons } from '@expo/vector-icons';
import Fto from '../../assets/Example/StockSnap_26ESMVYWAN.jpg';

const Story = (props) => {
    return (
        <>
            {props.item.author ?
                <TouchableOpacity style={Styles.container}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.1 }}
                        end={{ x: 0.1, y: 1.0 }}
                        colors={props.item.author ? ['#fff', '#fff'] : ['#FF9900', '#00FFF0']}
                        style={[Styles.Gradient, {
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding:3,
                            borderWidth:2,
                            borderColor:'#FF9900'
                        }]}
                    >
                        <View style={[Styles.Area, { height: 55 }]}>
                            <Image style={[Styles.image, { height: 55 }]} source={Fto} />
                        </View>
                        <Octicons name="diff-added" size={20} color="#FF9900" />
                    </LinearGradient>
                    <Text style={Styles.name} numberOfLines={1} ellipsizeMode={'tail'}>Eu</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.container}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.1 }}
                        end={{ x: 0.1, y: 1.0 }}
                        colors={props.item.author ? ['#D9D9D9', '#D9D9D9'] : ['#FF9900', '#00FFF0']}
                        style={Styles.Gradient}
                    >
                        <View style={Styles.Area}>
                            <Image style={Styles.image} source={{uri:props.item.data[0].img}} />
                        </View>
                    </LinearGradient>
                    <Text style={Styles.name} numberOfLines={1} ellipsizeMode={'tail'}>{props.item.title}</Text>
                </TouchableOpacity>
            }
        </>
    )
};
export default Story;

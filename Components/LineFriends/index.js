import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './styles';
import Button from '../Button';
import PhotoProfile from '../PhotoProfile';

const LineFriends = (props) => {
    const [accompany, setAccompany] = useState(false);

    return (
        <View style={[Styles.container, { width: props.width - 35 }]}>
            <View style={Styles.perfil}>
                <PhotoProfile Img={'https://aloalobahia.com/images/p/giseeeeeelevivara_alo_alo_bahia.jpg'} />
                <View>
                    <Text style={Styles.name} numberOfLines={1} ellipsizeMode={'tail'}>Mirela Albim</Text>
                    <Text style={{ fontSize: 10 }} numberOfLines={1} ellipsizeMode={'tail'}>mirela_albim</Text>
                    <Text style={{ fontSize: 10 }} numberOfLines={1} ellipsizeMode={'tail'}>{'200 mil'} Acompanhantes</Text>
                </View>
            </View>
            {false ?
                <Button
                    text={accompany ? 'Acompanhando' : 'Acompanhar'}
                    color={accompany ? '#fff' : '#585858'}
                    background={accompany ? '#FF9900' : '#E7E5E5'}
                    width={102}
                    size={13}
                    height={30}
                    onPress={() => setAccompany(!accompany)}
                />
                :
                <>
                    <Button
                        text={'Aceitar'}
                        color={'#fff'}
                        background={'#FF9900'}
                        width={65}
                        size={12}
                        height={30}
                        onPress={() => setAccompany(!accompany)}
                    />
                    <Button
                        text={'Recusar'}
                        color={'#fff'}
                        background={'#FF1F00'}
                        width={65}
                        size={12}
                        height={30}
                        onPress={() => setAccompany(!accompany)}
                    />
                </>
            }
        </View>
    )
};

export default LineFriends;
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './styles';
import Button from '../../../../Components/Button';

const Blocked = (props) => {

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <Pressable style={Styles.buttonArea} onPress={() => props.navigation.navigate('MyData')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Marmores de assis</Text>
                    </View>
                    <Button
                        text='Desbloquear'
                        color='#fff'
                        background='#FF9900'
                        width={100}
                        height={30}
                        size={11}
                        onPress={() => alert('d')}
                    />
                </Pressable>

            </View>
        </View>
    )
};

export default Blocked;
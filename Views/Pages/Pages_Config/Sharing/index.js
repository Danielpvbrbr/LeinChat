import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, FlatList, ScrollView } from 'react-native';
import { Styles } from './styles';
import { Picker } from '@react-native-picker/picker';

const Sharing = (props) => {
    const [gender, setGender] = useState('');


    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <View style={[Styles.select, { width: props.width - 35 }]}>
                    <Text style={[Styles.title]}>Compartilhamento</Text>
                    <Picker
                        selectedValue={gender}
                        style={{ height: 30, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    >
                        <Picker.Item label="Todos" value="all" />
                        <Picker.Item label="Amigos" value="friends" />
                        <Picker.Item label="Ninguém" value="nobody" />
                    </Picker>
                </View>
            </View>
        </View>
    )
};

export default Sharing;
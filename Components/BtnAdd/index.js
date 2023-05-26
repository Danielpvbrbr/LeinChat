import React from 'react';
import { View } from 'react-native';
import { Styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const BtnAdd = (props) => {
    // console.log(props.data.navigation)
    return (
        <View
            style={[Styles.container, { backgroundColor: props.focused ? '#FF9900' : props.color }]}
        >
            <MaterialIcons name={props.name} color={props.focused ? props.color : '#fff'} size={props.size} />
        </View>
    )
};
export default BtnAdd;

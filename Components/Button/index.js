import React from 'react';
import { Text, Pressable } from 'react-native';
import { Styles } from './styles';

const Button = (props) => {
    return (
        <Pressable style={[Styles.button, {
            backgroundColor: props.background,
            width: props.width,
            height: props.height
        }]} onPress={props.onPress}>
            <Text style={[Styles.TextButton, { color: props.color, fontSize: props.size }]}>{props.text}</Text>
        </Pressable >
    )
};
export default Button;

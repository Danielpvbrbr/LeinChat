import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from './styles';
import { Entypo } from '@expo/vector-icons';

const InputBorderBottom = (props) => {
    const [isAye, setisAye] = useState(true);

    return (
        <View style={{ marginBottom: props.marginBottom }}>
            <Text style={Styles.label}>{props.title}</Text>
            <View style={[Styles.areaButton, { width: props.width }]}>
                <TextInput
                    style={[Styles.input, { width: props.width, height: props.height }]}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    inputMode={props.inputMode}
                    keyboardType={props.keyboardType}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry && isAye}
                />
                {
                    props.secureTextEntry ?
                        <>
                            {props.iconName.length > 0 &&
                                !isAye ?
                                <Entypo
                                    style={Styles.icone}
                                    name={'eye'}
                                    size={props.iconSize}
                                    color={props.iconColor}
                                    onPress={() => setisAye(!isAye)}
                                />
                                :
                                <Entypo
                                    style={Styles.icone}
                                    name={'eye-with-line'}
                                    size={props.iconSize}
                                    color={props.iconColor}
                                    onPress={() => setisAye(!isAye)}
                                />}
                        </>
                        :
                        <>
                            {props.iconName.length > 0 &&

                                <Entypo
                                    style={Styles.icone}
                                    name={props.iconName}
                                    size={props.iconSize}
                                    color={props.iconColor}
                                />
                            }
                        </>
                }
            </View>
        </View>
    )
};

export default InputBorderBottom;
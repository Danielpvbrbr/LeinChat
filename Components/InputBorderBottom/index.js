import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from './styles';
import { Entypo } from '@expo/vector-icons';

const InputBorderBottom = ({
    title,
    onChangeText,
    value,
    placeholder,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    inputMode,
    keyboardType
}) => {
    const [isAye, setisAye] = useState(true);

    return (
        <View style={Styles.container}>
            <Text style={Styles.label}>{title}</Text>
            <View style={Styles.areaButton}>
                <TextInput
                    style={Styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    inputMode={inputMode}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry && isAye}
                />
                {
                    secureTextEntry ?
                        <>
                            {iconName.length > 0 &&
                                !isAye ?
                                <Entypo
                                    style={Styles.icone}
                                    name={'eye'}
                                    size={iconSize}
                                    color={iconColor}
                                    onPress={() => setisAye(!isAye)}
                                />
                                :
                                <Entypo
                                    style={Styles.icone}
                                    name={'eye-with-line'}
                                    size={iconSize}
                                    color={iconColor}
                                    onPress={() => setisAye(!isAye)}
                                />}
                        </>
                        :
                        <>
                            {iconName.length > 0 &&

                                <Entypo
                                    style={Styles.icone}
                                    name={iconName}
                                    size={iconSize}
                                    color={iconColor}
                                />
                            }
                        </>
                }
            </View>
        </View>
    )
};

export default InputBorderBottom;
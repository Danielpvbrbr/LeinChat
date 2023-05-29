import React, { useState } from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Delete_isabled = (props) => {
    const [user, setUser] = useState(false);

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <TouchableOpacity>
                    <Text style={[Styles.title, { color: '#FF9900', }]}>Desativar conta</Text>
                    <Text style={[Styles.desc, { width: props.width - 35 }]}>Ao desativar sua conta ninguém poderá ver suas publicações e todos os conteúdo contido
                        nela, essa opção poderá ser revertida a qualquer momento</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={[Styles.title, { color: '#BB271A' }]}>Deletar conta</Text>
                    <Text style={[Styles.desc, { width: props.width - 35 }]}>Ao deletar sua conta todos os conteúdos contido nela serão apagados permanentemente em
                        30 dias, essa opção poderá ser revertida antes do prazo finalizar.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Delete_isabled;
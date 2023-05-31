import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { Styles } from './styles';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import Button from '../../Components/Button';
import LineFriends from '../../Components/LineFriends';

const Friends = (props) => {
    const [filter, setFilter] = useState('Sigestôes');
    const [search, setSearch] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    // console.log(props.navigation)
    return (
        <View style={[Styles.container]}>
            <View style={[Styles.nav, { width: props.width - 35 }]} >
                {isSearch ?
                    <TextInput
                        style={[Styles.search, { width: props.width - 60 }]}
                        onPress={() => setIsSearch(!isSearch)}
                        onChangeText={setSearch}
                        value={search}
                        placeholder="Pesquisar"
                        keyboardType="web-search"
                        
                    />
                    :
                    <>
                        <Button
                            text='Sigestôes'
                            color={filter === 'Sigestôes' ? '#fff' : '#585858'}
                            background={filter === 'Sigestôes' ? '#FF9900' : '#E7E5E5'}
                            width={113}
                            height={35}
                            size={14}
                            onPress={() => setFilter('Sigestôes')}
                        />
                        <Button
                            text='Acompanhantes'
                            color={filter === 'Acompanhantes' ? '#fff' : '#585858'}
                            background={filter === 'Acompanhantes' ? '#FF9900' : '#E7E5E5'}
                            width={104}
                            height={35}
                            size={10.5}
                            onPress={() => setFilter('Acompanhantes')}
                        />
                        <Button
                            text='Solicitações'
                            color={filter === 'Solicitações' ? '#fff' : '#585858'}
                            background={filter === 'Solicitações' ? '#FF9900' : '#E7E5E5'}
                            width={100}
                            height={35}
                            size={14}
                            onPress={() => setFilter('Solicitações')}
                        />
                    </>
                }
                {isSearch ?
                    <Entypo name="list" size={24} color="#585858" onPress={() => setIsSearch(!isSearch)} />
                    :
                    <EvilIcons name="search" size={30} color="#585858" onPress={() => setIsSearch(!isSearch)} />
                }
            </View>

            <View style={[Styles.area, { width: props.width - 35 }]} >
                <LineFriends width={props.width} />
            </View>
        </View>
    )
};

export default Friends;
import React, { useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Styles } from './styles';
import Story from '../../Components/Story';
import Publication from '../../Components/Publication';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Julia gabru',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: true,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'
        }]
    },
    {
        id: '58694a0f-3daq1-471f-bd96-145571e29d72',
        title: 'Danan marci',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: false,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://anaclaudiathorpe.ne10.uol.com.br/wp-content/uploads/2021/04/Vivara-Gisele-3-1.jpg'
        }]
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Marmore jane',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: false,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'
        }]
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Pietra jade',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: false,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://visualjeans.com.br/imagens/home/img-lookbook-mulher.jpg?v=10.14'
        }]
    },
    {
        id: '58694a0f-3wda1-471f-bd96-145571e29d72',
        title: 'Mirela de alm',
        profile: {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj524RjgW641MVlNT-VV5R1IJGCNcUkELITENXx4n3inQANzqlqPSkcbqXeJabDrTeLSs&usqp=CAU',
            name: 'marcone da silva',
            nameUser: 'marcone',
            id: '1wsa'
        },
        author: false,
        visualized: false,
        data: [{
            id: 1,
            idUser: 22,
            visualized: false,
            img: 'https://aloalobahia.com/images/p/giseeeeeelevivara_alo_alo_bahia.jpg'
        }]
    }
];

const Feed = ({ width }) => {
    const [selectedId, setSelectedId] = useState();

    return (
        <ScrollView
            // contentOffset={({ x: 0, y: 0 })}
            // decelerationRate={'normal'}
            horizontal={false}
        // scrollEventThrottle ={(e)=>console.log(e)}
        >
            <View style={[Styles.AreaStory, { width: width }]}>
                <FlatList
                    data={DATA}
                    renderItem={props => <Story {...props} />}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={[Styles.AreaFeed, { width: width }]} >
                <FlatList
                    data={DATA}
                    renderItem={props => <Publication Photo={props.item.data[0].img} width={width}  {...props} />}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
};

export default Feed;
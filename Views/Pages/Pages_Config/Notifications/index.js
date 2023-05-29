import React, { useState } from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Styles } from './styles';
import {
    Entypo,
} from '@expo/vector-icons';

const Notifications = (props) => {
    const [time, setTime] = useState(true);

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.area, { width: props.width - 35 }]}>
                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Curtidas</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Comentários</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Menções</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Sugestões</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Novo Acompanhate</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Mensagens</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Novo story</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Publicação</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Compartilhamento</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>

                <Pressable style={Styles.buttonArea} onPress={() => alert('')}>
                    <View style={Styles.button}>
                        <Text style={Styles.textbtn}>Novo Acesso</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D9D9D9" }}
                        thumbColor={time ? "#FF9900" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTime}
                        value={time}
                    />
                </Pressable>
            </View>
        </View>
    )
};

export default Notifications;
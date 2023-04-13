import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PacketCard(props) {
    const navigation = useNavigation();

    function handleDetail() {
        navigation.navigate('Hola', { packet: props })
    }

    return (
        <View style={styles.cardContainer}>
            {/* <View style={[styles.spanCard, { backgroundColor: props.category_.name.includes('shonen') ? 'red' : props.category_.name.includes('comic') ? 'orange' : props.category_.name.includes('shojo') ? 'green' : props.category_.name.includes('seinen') ? 'purple' : '' }]}></View> */}
            <View style={styles.infoContainer}>
                <Image style={styles.img} source={{ uri: props.photo }} />
                <View style={styles.contText}>
                    <Text style={styles.title}>{props.title_}</Text>
                    <Text style={styles.category}>{props.category_.name}</Text>
                    <View style={styles.date}>
                        <TouchableOpacity style={styles.btnCont} onPress={handleDetail}>
                            <View>
                                <Text style={styles.btnTexto}>Detail</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.dateSF}>{props.packages[0].time[0].start_date}</Text>
                            <Text style={styles.dateSF}>{props.packages[0].time[0].finish_date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#262a47',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '85%',
        margin: 10
    },
    spanCard: {
        width: 3,
        height: 170,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 10
    },
    infoContainer: {
        padding: 1,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#fff',
        marginTop: 5
    },
    category: {
        fontSize: 18,
        marginLeft: 5,
        color: '#fff'
    },
    img: {
        width: 365,
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -2,
        marginLeft: -2
    },
    btnCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 60,
        backgroundColor: '#D1F366',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
    },
    btn: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // marginTop: 10,
        // marginBottom: 10,
    },
    dateSF: {
        marginTop: 20,
        fontSize: 12,
        color: '#fff'
    }
});
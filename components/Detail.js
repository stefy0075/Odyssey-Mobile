import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import onePacket from '../store/OnePacket/Actions'

const { read_One } = onePacket

function Detail(props) {
    const dispatch = useDispatch()
    const id = props._id
    console.log(id)
    const [packets, setPackets] = useState([])

    useEffect(() => {
        dispatch(read_One(id))
            .then((response) => {
                console.log(response.payload.packets)
                setPackets(response.payload.packets);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return (
        <ScrollView style={styles.cont}>
            <Image style={styles.img} source={{ uri: packets.cover_photo }} />
            <Text style={styles.title}>{packets.title}</Text>
            <Text style={styles.subtitle}> {packets.country} | {packets.continent} </Text>
            <View style={styles.description}>
                <Text style={styles.text}>{packets.description}</Text>
            </View>
            <Text style={styles.subtitle}> {packets.packages[0].type} | {packets.packages[1].type} | {packets.packages[2].type}</Text>
            <Text style={styles.subtitle}> {packets.packages[0].time[0].
                start_date} || {packets.packages[0].time[0].
                    finish_date}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#141627',
        height: 820,
    },
    img: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
        width: '80%',
        height: 400,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '500',
        marginBottom: 10,
        color: '#fff'
    },
    subtitle: {
        width: '90%',
        textAlign: 'center',
        color: '#fff',
        margin: 20
    },
    description: {
        width: '90%',
        alignSelf: 'center',
        color: '#fff'
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        color: '#fff'
    }
})

export default Detail
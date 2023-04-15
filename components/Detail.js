import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import onePacket from '../store/OnePacket/Actions'
import cart from '../assets/cart.png'

const { read_One } = onePacket

function Detail(props) {
    const dispatch = useDispatch()
    const id = props._id
    console.log(id)
    const [packets, setPackets] = useState([])
    let target = []

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

    async function handleCart() {
        try {
            const paqueteString = await AsyncStorage.getItem('paquete');
            const paquete = JSON.parse(paqueteString);
            console.log(paquete)
            return paquete;
        } catch (error) {
            console.log('Error al recuperar el paquete: ', error);
        }
    }

        return (
            <ScrollView style={styles.cont}>
                <View style={styles.cont2}>
                    <Image style={styles.img} source={{ uri: packets.cover_photo }} />
                    <Text style={styles.title}>{packets.title}</Text>
                    <Text style={styles.subtitle}> {packets.country} | {packets.continent} </Text>
                    <View style={styles.description}>
                        <Text style={styles.text}>{packets.description}</Text>
                    </View>
                    <View>
                        <View style={styles.cardType}>
                            {packets.packages?.map((pakage, index) => (
                                pakage.type === "Plane" ? (
                                    <View key={index} style={styles.cardInd}>
                                        <View>
                                            <Text style={styles.textType2}>Transport: {pakage.type}</Text>
                                            <Text style={styles.textStock}>Stock: {pakage.stock}</Text>
                                            <Text style={styles.textStock}>Start: {pakage.time[0].start_date}</Text>
                                            <Text style={styles.textStock}>Finish: {pakage.time[0].finish_date}</Text>
                                            <Text style={styles.textStock}>Price: ${pakage.price}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.btnCont} onPress={handleCart}>
                                            <Image source={cart} style={styles.btnCart} />
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            ))}
                        </View>
                        <View style={styles.cardType}>
                            {packets.packages?.map((pakage, index) => (
                                pakage.type === "Train" ? (
                                    <View key={index} style={styles.cardInd}>
                                        <View>
                                            <Text style={styles.textType2}>Transport: {pakage.type}</Text>
                                            <Text style={styles.textStock}>Stock: {pakage.stock}</Text>
                                            <Text style={styles.textStock}>Start: {pakage.time.start_date}</Text>
                                            <Text style={styles.textStock}>Finish: {pakage.time.finish_date}</Text>
                                            <Text style={styles.textStock}>Price: ${pakage.price}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.btnCont} onPress={handleCart}>
                                            <Image source={cart} style={styles.btnCart} />
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            ))}
                        </View>
                        <View style={styles.cardType}>
                            {packets.packages?.map((pakage, index) => (
                                pakage.type === "Bus" ? (
                                    <View key={index} style={styles.cardInd}>
                                        <View style={styles.textCard}>
                                            <Text style={styles.textType2}>Transport: {pakage.type}</Text>
                                            <Text style={styles.textStock}>Stock: {pakage.stock}</Text>
                                            <Text style={styles.textStock}>Start: {pakage.time.start_date}</Text>
                                            <Text style={styles.textStock}>Finish: {pakage.time.finish_date}</Text>
                                            <Text style={styles.textStock}>Price: ${pakage.price}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.btnCont} onPress={handleCart}>
                                            <Image source={cart} style={styles.btnCart} />
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }


    const styles = StyleSheet.create({
        cont: {
            backgroundColor: '#141627',
            height: 820,
        },
        cont2: {
            marginTop: 30
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
        },
        textType: {
            marginTop: 10,
            display: 'flex',
            gap: 10,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center'
        },
        text2: {
            fontSize: 15,
            lineHeight: 22,
            color: '#fff',
            margin: 10
        },
        cardType: {
            margin: 20,
            display: 'flex',
            alignSelf: 'center',
            width: '85%',
            height: 150,
            backgroundColor: '#1B1D28',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5
        },
        cardInd: {
            padding: 10,
            paddingRight: 30,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textCard: {
            display: 'flex',
            gap: 10
        },
        textType2: {
            alignSelf: 'flex-start',
            alignItems: 'flex-end',
            color: '#fff'
        },
        textStock: {
            color: '#fff'
        },
        btnCont: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            backgroundColor: '#D1F366',
            borderRadius: 5000,
        },
        btnCart: {
            width: 32,
            height: 32,
            fontWeight: 'bold'
        }
    })

    export default Detail

import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import onePacket from '../store/OnePacket/Actions'
import cart from '../assets/cart.png'


const { read_One } = onePacket

function Detail(props) {
    const dispatch = useDispatch()
    const id = props._id
    const [packets, setPackets] = useState([])
    let target = []

    useEffect(() => {
        dispatch(read_One(id))
            .then((response) => {
                setPackets(response.payload.packets);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    async function handleCart(pakage, id) {
        ToastAndroid.show('¡Se agregó el paquete al carrito!', ToastAndroid.SHORT)

        const stock = pakage.stock;
        if (pakage.price === 'Not Available' || stock === 'Not Available' || stock === 0) {
            // El paquete no se puede agregar al carrito
            console.log('Este paquete no está disponible');
            return;
        }
        try {
            const paqueteString = await AsyncStorage.getItem('paquete');
            let paquete = JSON.parse(paqueteString);

            if (!paquete) {
                paquete = [];
            }

            const existingPackageIndex = paquete.findIndex((item) => item.type === pakage.type && item.title === packets.title);

            if (existingPackageIndex !== -1) {
                // Si el paquete ya existe en el carrito, aumenta la cantidad
                paquete[existingPackageIndex].quantity += 1;
            } else {
                // Si el paquete no existe en el carrito, crea una nueva entrada
                paquete.push({
                    id,
                    ...pakage,
                    title: packets.title,
                    cover_photo: packets.cover_photo,
                    quantity: 1,
                });
            }
            
            await AsyncStorage.setItem('paquete', JSON.stringify(paquete));
            console.log('paquete',paquete)
            console.log('Paquete guardado en AsyncStorage');
        } catch (error) {
            console.log('Error al guardar el paquete: ', error);
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
                                    <TouchableOpacity style={styles.btnCont} onPress={() => handleCart(pakage, packets._id)}>
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
                                    <TouchableOpacity style={styles.btnCont} onPress={() => handleCart(pakage, packets._id)}>
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
                                    <TouchableOpacity style={styles.btnCont} onPress={() => handleCart(pakage, packets._id)}>
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
        height: '100%',
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

import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
import PacketsActions from '../store/Packets/actions';

const { read_all } = PacketsActions;

function Cart() {
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);
    const [storedPackets, setStoredPackets] = useState([]); // Variable local para almacenar los datos del AsyncStorage

    useFocusEffect(
        useCallback(() => {
            dispatch(read_all());

            // Obtener los datos del AsyncStorage y almacenarlos en la variable local
            AsyncStorage.getItem('paquete').then((data) => {
                if (data) {
                    const packets = JSON.parse(data);
                    if (Array.isArray(packets)) {
                        setStoredPackets(packets);
                    } else {
                        setStoredPackets([packets]);
                    }
                }
            });
        }, [dispatch, reload])
    );

    const handleRemovePacket = (packetId) => {
        // Buscar el índice del paquete que desea eliminar
        const packetIndex = storedPackets.findIndex((p) => p.id === packetId);

        if (packetIndex !== -1) {
            // Eliminar el paquete del array usando el índice encontrado
            const newStoredPackets = [...storedPackets];
            newStoredPackets.splice(packetIndex, 1);
            setStoredPackets(newStoredPackets);

            // Guardar la nueva lista en el AsyncStorage
            AsyncStorage.setItem('paquete', JSON.stringify(newStoredPackets));
        }
    };


    const handleClearCart = () => {
        // Vaciar la lista local
        setStoredPackets([]);

        // Vaciar el AsyncStorage
        AsyncStorage.removeItem('paquete');
    };

    const totalPrice = storedPackets.reduce((acc, packet) => acc + packet.price * packet.quantity, 0);
    const handleBuy = () => {
        // Hacer la petición HTTP al servidor para realizar la compra
        const headers = { 'Content-Type': 'application/json' };
        const cartItems = storedPackets.map(({ id, quantity }) => ({ id, quantity }));
        axios.post("http://localhost:8080/buy", cartItems, headers)
            .then(res => {
                // Redireccionar a la página de pago
                window.location.href = res.data.response.body.init_point;
                // Eliminar el carrito en localStorage
                AsyncStorage.removeItem('paquete');
            })
            .catch(err => console.error(err));
    };

    return (
        <ScrollView style={styles.cont}>
            <View>
                {storedPackets.map((packet) => (
                    <View key={packet.id}>
                        <View style={styles.contPaquete}>
                            <TouchableOpacity onPress={() => handleRemovePacket(packet.id)}>
                                <Text style={styles.removeButton}>X</Text>
                            </TouchableOpacity>
                            <Image style={styles.img} source={{ uri: packet.cover_photo }} />
                            <Text style={styles.title}>{packet.title}</Text>
                            <Text style={styles.text}>{packet.type}</Text>
                            <Text style={styles.text}>{packet.quantity}</Text>
                            <Text style={styles.text}>${packet.price}</Text>


                        </View>
                    </View>
                ))}
                <Text style={styles.total}>Total: ${totalPrice}</Text>
                <View style={styles.btns}>
                    {storedPackets.length > 0 && (
                        <TouchableOpacity onPress={handleClearCart}>
                            <Text style={styles.clearButton}>Remove</Text>
                        </TouchableOpacity>

                    )}

                    {storedPackets.length > 0 && (
                        <TouchableOpacity onPress={handleBuy}>
                            <Text style={styles.clearButton}>Buy</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contPaquete: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#262a47',
        borderRadius: 7,
        marginTop: 10,
    },
    cont: {
        backgroundColor: '#141627',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignContent: 'center',
        width: '100%',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 10,
        color: '#FFFFFF',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: '#FFFFFF',
    },
    removeButton: {
        fontSize: 16,
        color: '#D1F366',
        marginBottom: 10,
        marginLeft: '80%',
        fontWeight: 'bold',
    },
    clearButton: {
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#D1F366',
        padding: 10,
        marginTop: 20,
        alignSelf: 'center',
        width: 100,
        textAlign: 'center',
        borderRadius: 7
    },
    btns: {
        display: 'flex'
    },

    total: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 20,
    }
});

export default Cart;

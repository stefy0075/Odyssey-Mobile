import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PacketsActions from '../store/Packets/actions';
import PacketCard from './PacketCard';

const { read_all } = PacketsActions;

function Destinations() {
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);

    const packets = useSelector((store) => store.packets.packets);
    
    useFocusEffect(
        useCallback(() => {
            dispatch(read_all());
        }, [dispatch, reload])
    );

    return (
        <ScrollView>
            <View style={styles.cont}>
                <Text style={styles.filter}>
                    Acá deberia estar al menos un filtro
                </Text>
                {packets.length ? (
                    packets.map((packet) => <PacketCard key={packet._id} title_={packet.title} category_={packet.category_id} photo={packet.cover_photo} _id={packet._id} packages={packet.packages} />)
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20, color: '#fff' }}>Not Found</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#141627',
    },
    filter: {
        fontSize: 22,
        color: "#fff"
    }
})
export default Destinations;
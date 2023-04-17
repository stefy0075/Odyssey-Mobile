import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PacketsActions from '../store/Packets/actions';
import PacketCard from './PacketCard';

const { read_all } = PacketsActions;

function Destinations() {
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const packets = useSelector((store) => store.packets.packets);

    useFocusEffect(
        useCallback(() => {
            dispatch(read_all());
        }, [dispatch, reload])
    );

    const filteredPackets = packets.filter(packet => packet.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <ScrollView>
            <View style={styles.cont}>
                <View style={styles.filter}>
                    <TextInput
                        style={styles.inputSearch}
                        placeholder="Search"
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                </View>
                {filteredPackets.length ? (
                    filteredPackets.map((packet) => <PacketCard key={packet._id} title_={packet.title} category_={packet.category_id} photo={packet.cover_photo} _id={packet._id} packages={packet.packages} />)
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20, color: '#fff', height: 800 }}>Not Found</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#141627',
    },
    inputSearch: {
        flex: 1,
        height: 40,
        backgroundColor: "rgba(228, 228, 228, 0.5)",
        borderRadius: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        width: '85%',
    },
    filter: {
        display: 'flex',
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        width: '100%',
        margin: 8,
    }


})
export default Destinations;

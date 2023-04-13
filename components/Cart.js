import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PacketsActions from '../store/Packets/actions';

const { read_all } = PacketsActions;

function Cart() {
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
            <View>
                {/* {packets.map((packet) => (
                    <Text key={packet.id}>{packet.name}</Text>
                ))} */}
            </View>
        </ScrollView>
    );
}

export default Cart;
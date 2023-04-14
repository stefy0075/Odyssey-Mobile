import React from 'react'
import { View, Text } from 'react-native'
import Detail from '../components/Detail'
import { useRoute } from '@react-navigation/core';


function DetailScreen() {
    const route = useRoute();
    const { packet } = route.params;
    const id = packet._id

    return (
        <View>
            <Detail _id={id}/>
        </View>
    )
}

export default DetailScreen
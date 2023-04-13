import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import onePacket from '../store/OnePacket/Actions'

const {read_One} = onePacket

function Detail(props) {
    const dispatch = useDispatch()
    const id = props._id
    console.log(id)
    const [packets, setPackets] = useState([])

    useEffect(() => {
        dispatch(read_One(id))
            .then((response) => {
                console.log(setPackets)
                setPackets(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return (
        <View>
            <Text>
                Hola
            </Text>
        </View>
    )
}

export default Detail
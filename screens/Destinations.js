import React, { Component } from "react";
import { View, Text } from 'react-native'
import Destinations from '../components/Destinations'

export default class DestinatiosScreen extends Component {
    render(){
        return (
            <View>
                <Destinations />
            </View>
        )
    }
}
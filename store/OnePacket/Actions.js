import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_One = createAsyncThunk(
    'read_One',
    async (id) => {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        const config = {
            headers: { 'Authorization': `Bearer ${token}` }
        };
        const url = (`https://odyssey-back.onrender.com/destinos/${id}`)
        try {
            const response = await axios.get(url, config);
            console.log(response.data.destino)
            return {
                packets: response.data.destino
            };
        } catch (error) {
            console.log(error, 'ocurrió un error');
            return {
                packets: []
            };
        }
    }
);

const actions = {read_One}

export default actions
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_all = createAsyncThunk(
    'read_all',
    async() => {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        const config = {headers: {'Authorization': `Bearer ${token}`}
        };
        const url = 'https://odyssey-back.onrender.com/destinos';
        try {
            const response = await axios.get(url, config);
            return {
                packets: response.data.destino
            };
        } catch (error) {
            console.log(error);
            return {
                packets: []
            };
        }
    }
);

const actions = {read_all}

export default actions
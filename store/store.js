import { configureStore } from "@reduxjs/toolkit";
import packetsReducer from './Packets/reducer.js';

const store = configureStore({
    reducer: {
        packets: packetsReducer,
    },
});

export default store;
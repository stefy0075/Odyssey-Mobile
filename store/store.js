import { configureStore } from "@reduxjs/toolkit";
import packetsReducer from "./Packets/reducer.js";
import onePacketReducer from "./OnePacket/Reducer.js";
import reloadReducer from "./ReloadState/Reducer.js";

const store = configureStore({
  reducer: {
    packets: packetsReducer,
    onePacket: onePacketReducer,
    reloadReducer: reloadReducer,
  },
});

export default store;

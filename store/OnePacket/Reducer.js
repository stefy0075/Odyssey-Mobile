import { createReducer } from "@reduxjs/toolkit";
import readOne from "./Actions";
const { read_One } = readOne;

const initialState = {
  packet: [],
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(read_One.fulfilled, (state, action) => {
    let newState = {
      ...state,
      packet: action.payload.packet,
    };
    return newState;
  })
);

export default reducer;

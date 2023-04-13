import { createReducer } from "@reduxjs/toolkit";
import PacketsActions from './actions';

const { read_all } = PacketsActions;

const initialState = {
    packets: [],
};

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_all.fulfilled,
            (state, action) => {
                const newState = {
                    ...state,
                    packets: action.payload.packets,
                };
                return newState;
            }
        )
);

export default reducer;
import { createReducer } from "@reduxjs/toolkit";
import stateAction from './Actions'

const {captureState} = stateAction
const initialState = {
    reloadState: false
}
const reducer = createReducer(
    initialState, 
    (Builder)=>Builder
    .addCase(captureState, 
        (state, action)=> {
            let newState = {
                ...state,
                reloadState: action.payload.reloadState
            }
            return newState
        }
    )
) 

export default reducer 
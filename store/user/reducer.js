import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const { add_user, sign_in, verify_account, sign_out } = userActions;

const initialState = {
  user: [],
  accessToken: "",
  isAuthenticated: false,
  message: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sign_in.fulfilled, (state, action) => {
      let newState = {
        user: action.payload.response.user,
        accessToken: action.payload.response.user.response.token,
        isAuthenticated: true,
        message: action.payload.message,
      };
      return newState;
    })
    .addCase(add_user.fulfilled, (state, action) => {
      let newState = {
        user: action.payload.response.user,
        message: action.payload.message,
      };
      return newState;
    })
    .addCase(add_user.rejected, (state, action) => {
      let newState = {
        message: "Error!",
      };
      return newState;
    })
    .addCase(verify_account.fulfilled, (state, action) => {
      let newState = {
        message: action.payload.message,
      };
      return newState;
    })
    .addCase(verify_account.rejected, (state, action) => {
      let newState = {
        message: action.payload.message,
      };
      return newState;
    })
    .addCase(sign_out.fulfilled, (state, action) => {
      let newState = {
        isAuthenticated: false,
        message: action.payload.message,
      };
      return newState;
    });
});

export default userReducer;

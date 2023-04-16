import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const handleToken = () => {
  const BEARER_TOKEN = AsyncStorage.getItem("token");

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };
};

const API_URL = 'https://odyssey-back.onrender.com/users'

const add_user = createAsyncThunk("add_user", async (user) => {
  try {
    const response = await axios.post(
      `${API_URL}/signup`,
      user,
      handleToken()
    );
    return {
      response: { user: response.data },
      message: "User successfully created",
    };
  } catch (error) {
    return {
      response: { user: error.response.data },
      message: "Failed to create new user.",
    };
  }
});

const sign_in = createAsyncThunk("sign_in", async (user) => {
  try {
    let response = await axios.post(
      `${API_URL}/signin`,
      user,
      handleToken()
    );
    return {
      response: { user: response.data },
      message: "User authenticated",
    };
  } catch (error) {
    if (!error.response) {
      throw error;
    }

    return rejectWithValue(error.response.data);
  }
});

const sign_out = createAsyncThunk("sign_out", async () => {
  try {
    let response = await axios.post(`${API_URL}/signout`, handleToken());
    return {
      response: { user: response.data },
      message: "User logged out",
    };
  } catch (error) {
    return {
      response: { user: error.response.data },
      message: "User is not logged out",
    };
  }
});

const verify_account = createAsyncThunk(
  "verify_account",
  async ({ verify_code }) => {
    try {
      const response = await axios.get(
        `${API_URL}/verify/${verify_code}`,
        handleToken()
      );
      return {
        response: { user: response.data },
        message: "Author found",
      };
    } catch (error) {
      return {
        response: { user: error.response.data },
        message: "Author not found",
      };
    }
  }
);

const actions = { add_user, sign_in, sign_out, verify_account };

export default actions;

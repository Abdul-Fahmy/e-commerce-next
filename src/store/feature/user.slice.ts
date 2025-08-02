import { userState } from "@/types/user.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState: userState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  err: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (values: { email: string; password: string }) => {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
      method: "POST",
      data: values,
    };
    let { data } = await axios.request(options);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      toast.success("Welcome back");
    });
    builder.addCase(login.rejected, (state, action) => {
      if (action.error.message === "Request failed with status code 401") {
        state.err = "Incorrect Email or Password";
        toast.error("Incorrect Email or Password");
      }
    });
  },
});

export const userReducer = userSlice.reducer;

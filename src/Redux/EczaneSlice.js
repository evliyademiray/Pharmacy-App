/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const veriAl = createAsyncThunk("VeriAL", async (value) => {
  const res = await axios.get(
    `https://www.nosyapi.com/apiv2/service/pharmacies-on-duty?city=${value}&apiKey=N5erZHB5zWXGprA6KgoE3pOmfdZyFONihPXAxTCDYa0w9qAXdCFIdewkbNEK`
  );
  return res;
});

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

const EczaneSlice = createSlice({
  name: "EczaneSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(veriAl.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(veriAl.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(veriAl.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default EczaneSlice.reducer;

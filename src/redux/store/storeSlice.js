import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const storeSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {},
  reducers: {},
});

export default storeSlice.reducer;

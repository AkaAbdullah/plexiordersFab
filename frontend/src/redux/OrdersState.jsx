import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const response = await fetch("http://localhost:5000/api/orders");
  const allOrders = await response.json();
  return allOrders;
});

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isLoading: false,
  },
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
    },
    [getOrders.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default ordersSlice.reducer;

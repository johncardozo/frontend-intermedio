import { createSlice } from "@reduxjs/toolkit";

// Estado inicial
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
};

// Creación del slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;

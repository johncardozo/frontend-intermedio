import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

// Estado inicial
const initialState = {
  cartItems,
  amount: 4,
  total: 0,
};

// Creación del slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;

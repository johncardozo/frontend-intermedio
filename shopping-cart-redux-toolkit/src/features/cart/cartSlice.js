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
    removeItem: (state, action) => {
      // Obtiene el id del articulo a eliminar
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});
export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

// Estado inicial
const initialState = {
  cartItems,
  amount: 0,
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
    increaseItemAmount: (state, action) => {
      // Obtiene el id del articulo a incrementar
      const itemId = action.payload;
      // Busca el articulo en el carrito
      const item = state.cartItems.find((item) => item.id === itemId);
      // Incrementa la cantidad
      item.amount++;
    },
    decreaseItemAmount: (state, action) => {
      // Obtiene el id del articulo a decrementar
      const itemId = action.payload;
      // Busca el articulo en el carrito
      const item = state.cartItems.find((item) => item.id === itemId);
      // Reduce la cantidad
      item.amount--;
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      // Recorre los items del cart
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });
      // Modifica el estado
      state.amount = totalAmount;
      state.total = totalPrice;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;

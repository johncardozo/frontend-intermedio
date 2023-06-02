import { createSlice } from "@reduxjs/toolkit";

// Inicialización del estado
const initialState = {
  isOpen: false,
};

// Creación del slice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// Exporta los reducers
export const { openModal, closeModal } = modalSlice.actions;

// Exporta el Slice con reducer
export default modalSlice.reducer;

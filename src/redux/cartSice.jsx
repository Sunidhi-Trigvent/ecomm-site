// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    itemCount: 0, // This will store the count of items in the cart
  },
  reducers: {
    setCartItemCount: (state, action) => {
      state.itemCount = action.payload;
    },

    // Updated clearCart reducer
    clearCart: (state) => {
      state.cartItems = [];
      state.itemCount = 0; // Correct key name
    },
  },
});

export const { setCartItemCount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

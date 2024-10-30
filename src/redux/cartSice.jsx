// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemCount: 0, // This will store the count of items in the cart
  },
  reducers: {
    setCartItemCount: (state, action) => {
      state.itemCount = action.payload;
    },
  },
});

export const { setCartItemCount } = cartSlice.actions;

export default cartSlice.reducer;

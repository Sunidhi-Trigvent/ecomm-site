import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemCount: 0, // This will store the count of items in the cart
    cartItems: [], // Array to store items in the cart
  },
  reducers: {
    setCartItemCount: (state, action) => {
      state.itemCount = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = []; // Clear all items in the cart
      state.itemCount = 0; // Reset item count to 0
    },
  },
});

export const { setCartItemCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

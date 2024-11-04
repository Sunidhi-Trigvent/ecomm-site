// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userInfo: null, // or {}
    cartItems: [], // Initialize cartItems as an empty array
  },
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload; // Set user data here
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.cartItems = []; // Clear cart items on logout
    },
    addToCart(state, action) {
      state.cartItems?.push(action.payload); // Add the product details to cartItems
    },
  },
});

export const { setUser, logout, addToCart } = userSlice.actions;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectCartItems = (state) => state.user.cartItems; // Selector for cart items

export default userSlice.reducer;

// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userInfo: null, // or {}
  },
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload; // Set user data here
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
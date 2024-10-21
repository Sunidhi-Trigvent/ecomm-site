// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null, // Initial state can be null or an empty object
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: () => null, // Reset user data on logout
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

// src/redux/rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import cartReducer from "./cartSice"; // Import cartReducer

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer, // Add cartReducer here
  // Add other reducers here if needed
});

export default rootReducer;

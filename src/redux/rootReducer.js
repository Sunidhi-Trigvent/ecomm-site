// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userSlice'; // Adjust the path as needed

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import * as slice from './slices';
const rootReducer = combineReducers({
  auth: slice.authReducer,
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";

import authSlice from './reducers/authSlice';
import editorSlice from './reducers/editorSlice';

const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    editorReducer: editorSlice.reducer
  }
})

export default store;

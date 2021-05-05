import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  username: "",
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
        state.isAuthenticated=  true;
        state.username = action.payload.username;
      return state;
    },
    logout(state) {
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

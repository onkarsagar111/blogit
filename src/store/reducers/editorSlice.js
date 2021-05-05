import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title : '',
  content: ''
};

const editorSlice = createSlice({
  name: "Editor",
  initialState: initialState,
  reducers: {
    updateEditor(state, action) {
      return { ...state, title: action.title, content: action.content };
    },
    resetEditor(state) {
        return initialState;
    }
  },
});

export const editorActions = editorSlice.actions;

export default editorSlice;

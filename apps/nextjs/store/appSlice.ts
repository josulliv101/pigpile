import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export const appSlice = createSlice({
  name: "app",

  initialState: {
    isUnloading: false,
  },

  reducers: {
    setState(state, action) {
      console.log("App set", action);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectAppState = () => (state: AppState) => state[appSlice.name];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

export const appSlice = createSlice({
  name: "app",

  initialState: {
    isUnloading: false,
    isMobileNavOpen: false,
  },

  reducers: {
    setState(state, action) {
      console.log("App set", action);
      return {
        ...state,
        ...action.payload,
      };
    },
    openMobileNav(state, action: PayloadAction<void>) {
      console.log("updateMobileNav", action);
      state.isMobileNavOpen = true;
    },
    closeMobileNav(state, action: PayloadAction<void>) {
      console.log("updateMobileNav", action);
      state.isMobileNavOpen = false;
    },
  },
});

export const selectAppState = () => (state: AppState) => state[appSlice.name];

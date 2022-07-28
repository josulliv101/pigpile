import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface AppSliceState {
  isUnloading: boolean;
  isMobileNavOpen: boolean;
}

export const appSlice = createSlice({
  name: "app",

  initialState: {
    isUnloading: false,
    isMobileNavOpen: false,
  } as AppSliceState,

  reducers: {
    unloading(state) {
      state.isUnloading = true;
    },
    openMobileNav(state) {
      state.isMobileNavOpen = true;
    },
    closeMobileNav(state) {
      state.isMobileNavOpen = false;
    },
  },
});

export const selectAppState = () => (state: AppState) => state[appSlice.name];

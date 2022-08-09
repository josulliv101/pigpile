import { createSlice } from "@reduxjs/toolkit";
import { User } from "@josulliv101/types";
import { AppState } from "store";

export interface AppSliceState {
  isUnloading: boolean;
  isMobileNavOpen: boolean;
  user: User | null;
}

export const appSlice = createSlice({
  name: "app",

  initialState: {
    isUnloading: false,
    isMobileNavOpen: false,
    user: null,
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
  extraReducers: (builder) => {
    builder.addCase("auth/autheniticate", (state, action) => {
      state.user = action.payload;
    });
  },
});

export const selectAppState = () => (state: AppState) => state[appSlice.name];

export const selectUser = () => (state: AppState) => {
  const appState = state[appSlice.name] as AppSliceState;
  return appState?.user;
};

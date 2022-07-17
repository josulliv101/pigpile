import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./authSlice";
import { campaignsSlice } from "./campaignsSlice";
import { themeSlice } from "./themeSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [campaignsSlice.name]: campaignsSlice.reducer,
      [themeSlice.name]: themeSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

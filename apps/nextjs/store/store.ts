import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { appSlice } from "./appSlice";
import { authSlice } from "./authSlice";
import { campaignsSlice } from "./campaignsSlice";
import { themeSlice } from "./themeSlice";
import { paymentSlice } from "./paymentSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [campaignsSlice.name]: campaignsSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
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

import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appSlice } from "./appSlice";
import { authSlice } from "./authSlice";
import { campaignsSlice } from "./campaignsSlice";
import { donationsSlice } from "./donationsSlice";
import { donationFilterSlice } from "./donationFilterSlice";
import { statusSlice } from "./statusSlice";
import { themeSlice } from "./themeSlice";
import { donationStepsSlice } from "./donationStepsSlice";
import { addUniqueIdMiddleware } from "./addUniqueIdMiddleware";

export const listenerMiddleware = createListenerMiddleware();

export const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [campaignsSlice.name]: campaignsSlice.reducer,
      [donationFilterSlice.name]: donationFilterSlice.reducer,
      [donationsSlice.name]: donationsSlice.reducer,
      [donationStepsSlice.name]: donationStepsSlice.reducer,
      [statusSlice.name]: statusSlice.reducer,
      [themeSlice.name]: themeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(addUniqueIdMiddleware, listenerMiddleware.middleware);
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);

import { Action, configureStore, createListenerMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./createReducerManager";
import { appSlice } from "./appSlice";
import { campaignsSlice } from "./campaignsSlice";
import { donationFilterSlice } from "./donationFilterSlice";
import { donationStepsSlice } from "./donationStepsSlice";
import { statusSlice } from "./statusSlice";
import { themeSlice } from "./themeSlice";
import { addUniqueIdMiddleware } from "./addUniqueIdMiddleware";

export const listenerMiddleware = createListenerMiddleware();

// authSlice & donationsSlice are lazy loaded when needed
const staticReducers = {
  [appSlice.name]: appSlice.reducer,
  [campaignsSlice.name]: campaignsSlice.reducer,
  [donationFilterSlice.name]: donationFilterSlice.reducer,
  [donationStepsSlice.name]: donationStepsSlice.reducer,
  [statusSlice.name]: statusSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
};

export const reducerManager = createReducerManager(staticReducers);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeStore = (): EnhancedStore<any, Action<any>> => {
  return configureStore({
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(addUniqueIdMiddleware, listenerMiddleware.middleware);
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

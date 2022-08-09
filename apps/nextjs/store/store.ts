// import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
/*import { createReducerManager } from "./createReducerManager";
import { appSlice } from "./appSlice";
import { campaignsSlice } from "./campaignsSlice";
import { donationFilterSlice } from "./donationFilterSlice";
import { donationStepsSlice } from "./donationStepsSlice";
import { statusSlice } from "./statusSlice";
import { themeSlice } from "./themeSlice";
import { addUniqueIdMiddleware } from "./addUniqueIdMiddleware";*/
import { makeStore } from "./makeStore";
// export const listenerMiddleware = createListenerMiddleware();
export * from "./getAuthApi";

export * from "./makeStore";

/*// authSlice & donationsSlice are lazy loaded when needed
const staticReducers = {
  [appSlice.name]: appSlice.reducer,
  [campaignsSlice.name]: campaignsSlice.reducer,
  [donationFilterSlice.name]: donationFilterSlice.reducer,
  [donationStepsSlice.name]: donationStepsSlice.reducer,
  [statusSlice.name]: statusSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
};

export const reducerManager = createReducerManager(staticReducers);

export const makeStore = () => {
  return configureStore({
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(addUniqueIdMiddleware, listenerMiddleware.middleware);
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};*/

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);

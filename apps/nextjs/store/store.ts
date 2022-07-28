import {
  configureStore,
  createListenerMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { appSlice } from "./appSlice";
import { authSlice } from "./authSlice";
import { campaignsSlice } from "./campaignsSlice";
import { donationsSlice } from "./donationsSlice";
import { donationFilterSlice } from "./donationFilterSlice";
import { statusSlice } from "./statusSlice";
import { themeSlice } from "./themeSlice";
import { paymentSlice } from "./paymentSlice";
import { middlewareAugmentActionPayloadWithId } from "./middlewareAugmentActionPayloadWithId";

export const listenerMiddleware = createListenerMiddleware();

export const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [campaignsSlice.name]: campaignsSlice.reducer,
      [donationFilterSlice.name]: donationFilterSlice.reducer,
      [donationsSlice.name]: donationsSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [statusSlice.name]: statusSlice.reducer,
      [themeSlice.name]: themeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        middlewareAugmentActionPayloadWithId,
        listenerMiddleware.middleware
      );
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

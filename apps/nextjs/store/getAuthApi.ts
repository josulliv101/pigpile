import { User } from "@josulliv101/types";

import { AppDispatch, reducerManager } from "store";

let isInitialized = false;

export const getAuthApi = async (dispatch: AppDispatch) => {
  // TODO fetch in parallel
  const { authSlice, ...authApi } = await import("store/authSlice");
  const { connectClientApp } = await import("@josulliv101/connect-client");

  reducerManager.add(authSlice.name, authSlice.reducer);

  if (!isInitialized) {
    isInitialized = true;
    connectClientApp((user: User) => dispatch(authSlice.actions.autheniticate(user)));
  }
  return authApi;
};

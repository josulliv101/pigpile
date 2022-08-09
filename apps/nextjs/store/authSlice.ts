import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { Provider } from "@josulliv101/types";
import { auth, signInWithPopup } from "@josulliv101/connect-client";
import { AppState } from "./";

export interface AuthState {
  isReady: boolean;
  error?: string;
}

export const signInUserThunk = createAsyncThunk<void, Provider>(
  "auth/signInUser",
  async (provider) => {
    if (!provider) {
      throw new Error("An auth provider is required.");
    }
    await signInWithPopup(auth, provider);
  }
);

export const signOutUserThunk = createAsyncThunk<void>("auth/signOutUser", async () => {
  await signOut(auth);
});

export const authSlice = createSlice({
  name: "auth",

  initialState: { error: "", isReady: false } as AuthState,

  reducers: {
    autheniticate: (state) => {
      state.isReady = true;
    },
  },
});

export const selectIsAppReady = () => (state: AppState) => {
  const authState = state?.[authSlice.name] as AuthState;
  return authState?.isReady;
};

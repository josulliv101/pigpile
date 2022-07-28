import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { AuthState, User } from "@josulliv101/types";
import { auth, signInWithPopup } from "@josulliv101/connect-client";
import { AppState } from "./";

export const signInUserThunk = createAsyncThunk(
  "auth/signInUser",
  async (options: { provider: any; cb: () => void }) => {
    if (!options?.provider) {
      throw new Error("An auth provider is required.");
    }
    await signInWithPopup(auth, options.provider);
  }
);

export const signOutUserThunk = createAsyncThunk(
  "auth/signOutUser",
  async () => {
    await signOut(auth);
  }
);

export const authSlice = createSlice({
  name: "auth",

  initialState: { user: null, error: "", isReady: false } as AuthState,

  reducers: {
    autheniticate: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isReady = true;
    },
  },
});

export const selectUser = () => (state: AppState) =>
  state?.[authSlice.name]?.user;

export const selectIsAppReady = () => (state: AppState) =>
  state?.[authSlice.name]?.isReady;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { Provider, User } from "@josulliv101/types";
import { auth, signInWithPopup } from "@josulliv101/connect-client";
import { AppState } from "./";

export interface AuthState {
  user?: User | null;
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

export const signOutUserThunk = createAsyncThunk<void>(
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

/*export const selectUser = () => (state: AppState) =>
  state?.[authSlice.name]?.user;*/

export const selectIsAppReady = () => (state: AppState) =>
  state?.[authSlice.name]?.isReady;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { AuthState, User } from "@josulliv101/types";
import { auth, signInWithPopup } from "@josulliv101/connect-client";
import { AppState } from "./";

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (options: { provider: any; cb: () => void }) => {
    console.log("@@@signInUser args@@@", options);
    if (!options?.provider) {
      return console.warn("no auth provider found");
    }
    try {
      await signInWithPopup(auth, options?.provider);
      console.log("auth", auth.currentUser);
    } catch (error) {
      return error;
    }
  }
);

export const signOutUser = createAsyncThunk("auth/signOutUser", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    return error;
  }
});

export const authSlice = createSlice({
  name: "auth",

  initialState: { user: null, error: "", isReady: false } as AuthState,

  reducers: {
    autheniticate: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isReady = true;
      return state;
    },
  },
});

export const selectUser = () => (state: AppState) =>
  state?.[authSlice.name]?.user;

export const selectIsAppReady = () => (state: AppState) =>
  state?.[authSlice.name]?.isReady;

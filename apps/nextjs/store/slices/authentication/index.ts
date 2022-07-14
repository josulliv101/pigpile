import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
// import { auth, signInPopup, signOut } from "@pigpile/firebase";

// export { providerGithub } from "@pigpile/firebase";

export interface User {
  uid: string;
  displayName: string | null;
  isAnonymous: boolean | null;
  isAdmin?: boolean | null;
}

export interface State {
  user: User | null;
  error?: string;
}

export const signInUser = createAsyncThunk(
  "authentication/signInUser",
  async (options: { provider: any; cb: () => void }) => {
    return Promise.resolve(null);
    /*    console.log("@@@signInUser args@@@", options);
    if (!options?.provider) {
      return;
    }
    try {
      await signInPopup(auth, options?.provider);
    } catch (error) {
      return error;
    }*/
  }
);

export const signOutUser = createAsyncThunk(
  "authentication/signOutUser",
  async () => {
    return Promise.resolve(null);
    /*  try {
    await signOut(auth); // return
  } catch (error) {
    return error;
  }*/
  }
);

const initialState: State = {
  user: null,
  error: "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (proxy, args) => {
      console.log("signInUser.fulfilled", proxy, args);
      /*     if (args?.meta?.arg?.cb) {
        console.log("calling fn");
        args.meta.arg.cb();
      }
      if (auth.currentUser) {
        const { uid, photoURL, displayName, email, isAnonymous } =
          auth.currentUser!;
        login({ uid, photo: photoURL, email, displayName, isAnonymous });
      }*/
    });
    builder.addCase(signOutUser.fulfilled, () => {
      console.log("signOutUser.fulfilled");
      // logout();
    });
  },
});

export const { login, logout } = authenticationSlice.actions;
export const selectUser = (state: RootState) => state.authentication.user;

export const userReducer = authenticationSlice.reducer;

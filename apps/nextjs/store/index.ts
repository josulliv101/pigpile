import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import { signOut } from "firebase/auth";

// import { getCampaignFromDb } from "@pigpile/db";
import { AuthState, Campaign, User } from "@pigpile/types";
import { auth, signInWithPopup } from "@pigpile/connect-client"; // , signInWithPopup, GithubAuthProvider

export const campaignSlice = createSlice({
  name: "campaign",

  initialState: {} as Record<string, Campaign>,

  reducers: {
    setCampaign(state, action) {
      console.log("setCampaign", action);
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("campaign HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.campaign,
      };
    },
  },
});

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (options: { provider: any; cb: () => void }) => {
    console.log("@@@signInUser args@@@", options);
    if (!options?.provider) {
      return;
    }
    console.log("auth", auth.currentUser);
    // await signOut(auth); // return
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
    await signOut(auth); // return
  } catch (error) {
    return error;
  }
});

/*export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (options: { provider: any; cb: () => void }) => {
    console.log("@@@signInUser args", options, auth);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('user', credential, user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log('credential', credential)
      });
  }
);*/

export const authSlice = createSlice({
  name: "auth",

  initialState: { user: null, error: "" } as AuthState,

  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      return state;
    },
    logout: (state) => {
      state.user = null;
      return state;
    },
  },

  extraReducers: (builder) => {
    /*    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload?.auth,
      };
    },*/
    builder.addCase(HYDRATE, (state, { payload }) => {
      console.log("auth HYDRATE", payload);
      return {
        ...state,
        ...payload?.auth,
      };
    }),
      builder.addCase(signInUser.fulfilled, (proxy, args) => {
        console.log("signInUser.fulfilled", proxy, args);
        if (args?.meta?.arg?.cb) {
          console.log("calling fn");
          args.meta.arg.cb();
        }
        if (auth.currentUser) {
          const { uid, photoURL, displayName, email, isAnonymous } =
            auth.currentUser!;
          authSlice.actions.login({
            uid,
            photo: photoURL,
            email,
            displayName,
            isAnonymous,
          });
        }
      });
    builder.addCase(signOutUser.fulfilled, () => {
      console.log("signOutUser.fulfilled");
      authSlice.actions.logout();
    });
  },
});

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [campaignSlice.name]: campaignSlice.reducer,
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

export const fetchUser =
  (id: any): AppThunk =>
  async (dispatch) => {
    const timeoutPromise = (timeout: number) =>
      new Promise((resolve) => setTimeout(resolve, timeout));

    await timeoutPromise(200);

    dispatch(
      authSlice.actions.login({
        uid: "xyz",
        displayName: "Joe",
        isAnonymous: false,
        isAdmin: true,
      })
    );
  };

export const fetchCampaign =
  (id: string): AppThunk =>
  async (dispatch) => {
    // const campaign = await getCampaignFromDb(id);
    dispatch(
      campaignSlice.actions.setCampaign({
        [id]: {},
      })
    );
  };

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectUser = () => (state: AppState) =>
  state?.[authSlice.name]?.user;

export const selectCampaign = (id: any) => (state: AppState) =>
  state?.[campaignSlice.name]?.[id];

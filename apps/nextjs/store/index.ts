import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { getCampaignFromDb } from "@pigpile/db";
import { AuthState, Campaign, User } from "@pigpile/types";

export const campaignSlice = createSlice({
  name: "campaign",

  initialState: {} as Record<string, Campaign>,

  reducers: {
    setCampaign(_, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
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
    const timeoutPromise = (timeout: number) =>
      new Promise((resolve) => setTimeout(resolve, timeout));

    await timeoutPromise(200);
  }
);

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

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload?.auth,
      };
    },
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
    const campaign = await getCampaignFromDb(id);
    dispatch(
      campaignSlice.actions.setCampaign({
        [id]: campaign,
      })
    );
  };

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectUser = () => (state: AppState) =>
  state?.[authSlice.name]?.user;

export const selectCampaign = (id: any) => (state: AppState) =>
  state?.[campaignSlice.name]?.[id];

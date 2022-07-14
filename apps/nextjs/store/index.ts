import {
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export interface User {
  uid: string;
  displayName: string | null;
  isAnonymous: boolean | null;
  isAdmin?: boolean | null;
}

export interface AuthState {
  user: User | null;
  error?: string;
}

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

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectUser = (id: any) => (state: AppState) =>
  state?.[authSlice.name]?.user;

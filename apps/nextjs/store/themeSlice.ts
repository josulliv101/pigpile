import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChesterAnimations } from "@josulliv101/core";
import { ColorScheme, DEFAULT_COLOR_SCHEME_ID } from "@josulliv101/theme";
import { AppState } from "./store";

export const themeSlice = createSlice({
  name: "theme",

  initialState: {
    colorScheme: 0,
    colorMode: 0,
    userTheme: 0,
    chesterAnimation: 0,
  },

  reducers: {
    setActiveIndex: (
      state,
      action: PayloadAction<{ id: string; index: number }>
    ) => {
      state[action.payload.id] = action.payload.index;
      return state;
    },
  },

  extraReducers: {},
});

export const selectColorSchemeIndex = () => (state: AppState) =>
  state[themeSlice.name].colorScheme;

export const selectThemeState = () => (state: AppState) =>
  state[themeSlice.name];

export const selectChesterAnimation = () => (state: AppState) => {
  const chesterAnimationIndex = state[themeSlice.name].chesterAnimation;
  console.log(
    "selectChesterAnimation",
    Object.values(ChesterAnimations)[chesterAnimationIndex]
  );
  return Object.values(ChesterAnimations)[chesterAnimationIndex];
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChesterAnimations } from "@josulliv101/core";
import { AppState } from "./store";

export interface ThemeState {
  colorScheme: number;
  colorMode: number;
  userTheme: number;
  chesterAnimation: number;
}

export const themeSlice = createSlice({
  name: "theme",

  initialState: {
    colorScheme: 0,
    colorMode: 0,
    userTheme: 0,
    chesterAnimation: 0,
  } as ThemeState,

  reducers: {
    setActiveIndex: (
      state,
      action: PayloadAction<{ id: string; index: number }>
    ) => {
      state[action.payload.id as keyof ThemeState] = action.payload.index;
    },
  },
});

export const selectColorSchemeIndex = () => (state: AppState) =>
  state[themeSlice.name].colorScheme;

export const selectThemeState = () => (state: AppState) =>
  state[themeSlice.name];

export const selectChesterAnimation = () => (state: AppState) => {
  const chesterAnimationIndex = state[themeSlice.name].chesterAnimation;
  return Object.values(ChesterAnimations)[chesterAnimationIndex];
};

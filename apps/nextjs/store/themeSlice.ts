import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorScheme, DEFAULT_COLOR_SCHEME_ID } from "@pigpile/theme";
import { AppState } from "./store";

export const themeSlice = createSlice({
  name: "theme",

  initialState: {
    colorScheme: 2,
    colorMode: 0,
  },

  reducers: {
    /*    setColorSchemeId: (state, action: PayloadAction<string>) => {
      state.colorSchemeId = action.payload;
      return state;
    },*/
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

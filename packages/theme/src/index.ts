import { extendTheme } from "@josulliv101/core";
import components from "./components";
import foundations from "./foundations";
import styles from "./styles";
import { ColorScheme, UserTheme } from "./types";
import * as colorSchemes from "./colorSchemes";
import * as userThemes from "./userThemes";

export * from "./useThemeWithDefaults";
export * as colorSchemes from "./colorSchemes";
export * as userThemes from "./userThemes";
export * from "./themeOptions";
export * from "./types";

export const DEFAULT_COLOR_SCHEME_ID = colorSchemes.colorSchemeBluePink.id;

export const colorSchemeMap = Object.values(colorSchemes).reduce(
  (acc, cs) => ({ ...acc, [cs.id]: cs }),
  {}
);

export const colorSchemeList = Object.values(colorSchemes);
export const userThemeList = Object.values(userThemes);

export const getColorSchemeByIndex = (i: number): ColorScheme => {
  return colorSchemeList[i];
};

export const getUserThemeByIndex = (i: number): UserTheme => {
  return userThemeList[i];
};

export const getColorScheme = (id: string | number): ColorScheme => {
  if (typeof id === "number") {
    colorSchemeList[id];
  }
  return colorSchemeMap[id];
};

export const theme = extendTheme({
  components,
  ...foundations,
  styles,
});

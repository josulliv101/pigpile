import { extendTheme } from "@pigpile/core";
import components from "./components";
import foundations from "./foundations";
import styles from "./styles";

export * from "./useThemeWithDefaults";
export * as colorSchemes from "./colorSchemes";
export * as userThemes from "./userThemes";
export * from "./themeOptions";
export * from "./types";

export const theme = extendTheme({
  components,
  ...foundations,
  styles,
});

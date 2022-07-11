import { useMemo } from "react";
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
  // withDefaultProps,
} from "@pigpile/core";
import { theme } from "./index";

export const getThemeWithDefaults = (colorScheme, userTheme) => {
  console.log("getThemeWithDefaults", colorScheme, userTheme);
  return extendTheme(
    ...colorScheme.componentsByColorScheme.map((item) =>
      withDefaultColorScheme(item)
    ),
    ...userTheme.componentsByVariant.map((item) => withDefaultVariant(item)),
    ...userTheme.componentsBySize.map((item) => withDefaultSize(item)),
    theme
  );
};

export const useThemeWithDefaults = (colorScheme, userTheme) => {
  const customTheme = useMemo(
    () => getThemeWithDefaults(colorScheme, userTheme),
    [colorScheme, userTheme]
  );
  return customTheme;
};

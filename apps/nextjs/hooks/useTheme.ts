import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
  // withDefaultProps,
} from "@pigpile/core";
import {
  getColorSchemeByIndex,
  theme,
  userThemes,
  ColorScheme,
} from "@pigpile/theme";
import { selectColorSchemeIndex, selectThemeState, themeSlice } from "../store";

// TODO on-demand loading of themes

export const getThemeWithDefaults = (colorScheme: ColorScheme, userTheme) => {
  // console.log("getThemeWithDefaults", colorScheme, userTheme);
  return extendTheme(
    ...colorScheme.componentsByColorScheme.map((item) =>
      withDefaultColorScheme(item)
    ),
    ...userTheme.componentsByVariant.map((item) => withDefaultVariant(item)),
    ...userTheme.componentsBySize.map((item) => withDefaultSize(item)),
    theme
  );
};

export const useTheme = (_, userTheme__ = userThemes.farmUserTheme) => {
  const dispatch = useDispatch();
  const colorSchemeIndex = useSelector(selectColorSchemeIndex());
  const themeState = useSelector(selectThemeState());
  const colorScheme = getColorSchemeByIndex(themeState.colorScheme);
  console.log("colorSchemeIndex...", colorSchemeIndex, colorScheme);
  const theme = useMemo(
    () => getThemeWithDefaults(colorScheme, userTheme__),
    [colorSchemeIndex]
  );

  const onThemeOptionChange = useCallback(
    (id: string, index: number) => {
      dispatch(themeSlice.actions.setActiveIndex({ id, index }));
    },
    [dispatch]
  );

  return { theme, themeState, onThemeOptionChange };
};

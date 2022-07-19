import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
} from "@josulliv101/core";
import {
  getColorSchemeByIndex,
  theme,
  userThemes,
  ColorScheme,
} from "@josulliv101/theme";
import { selectThemeState, themeSlice } from "../store";

// TODO on-demand loading of themes / clean this up

export const getThemeWithDefaults = (colorScheme: ColorScheme, userTheme) => {
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
  const activeIndexes = useSelector(selectThemeState());
  const colorScheme = getColorSchemeByIndex(activeIndexes.colorScheme);
  const theme = useMemo(
    () => getThemeWithDefaults(colorScheme, userTheme__),
    [activeIndexes.colorScheme]
  );

  const onThemeOptionChange = useCallback(
    (id: string, index: number) => {
      dispatch(themeSlice.actions.setActiveIndex({ id, index }));
    },
    [dispatch]
  );

  return { theme, themeState: activeIndexes, onThemeOptionChange };
};

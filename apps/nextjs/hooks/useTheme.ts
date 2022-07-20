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
  getUserThemeByIndex,
  theme,
  userThemes,
  ColorScheme,
  UserTheme,
} from "@josulliv101/theme";
import { selectThemeState, themeSlice } from "../store";

// TODO on-demand loading of themes / clean this up

export const getThemeWithDefaults = (
  colorScheme: ColorScheme,
  userTheme: UserTheme
) => {
  const {
    componentsByVariant = [],
    componentsBySize = [],
    ...rest
  } = userTheme;
  console.log("getThemeWithDefaults", componentsByVariant, componentsBySize);
  return extendTheme(
    ...colorScheme.componentsByColorScheme.map((item) =>
      withDefaultColorScheme(item)
    ),
    ...componentsByVariant.map((item) => withDefaultVariant(item)),
    ...componentsBySize.map((item) => withDefaultSize(item)),
    {
      ...theme,
      userTheme: rest,
    }
  );
};

export const useTheme = () => {
  const dispatch = useDispatch();
  const activeIndexes = useSelector(selectThemeState());
  const colorScheme = getColorSchemeByIndex(activeIndexes.colorScheme);
  const userTheme = getUserThemeByIndex(activeIndexes.userTheme);
  console.log("userTheme ...", activeIndexes, colorScheme, userTheme);
  const theme = useMemo(
    () => getThemeWithDefaults(colorScheme, userTheme),
    [activeIndexes.colorScheme, activeIndexes.userTheme]
  );

  const onThemeOptionChange = useCallback(
    (id: string, index: number) => {
      dispatch(themeSlice.actions.setActiveIndex({ id, index }));
    },
    [dispatch]
  );

  return { theme, themeState: activeIndexes, onThemeOptionChange };
};

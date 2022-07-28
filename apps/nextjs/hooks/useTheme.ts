import { useCallback, useMemo } from "react";
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
  ColorScheme,
  UserTheme,
} from "@josulliv101/theme";
import { selectThemeState, themeSlice } from "../store";

// TODO on-demand loading of themes

export const getThemeWithDefaults = (
  colorScheme: ColorScheme,
  userTheme: UserTheme
) => {
  const {
    componentsByVariant = [],
    componentsBySize = [],
    ...rest
  } = userTheme;

  const colorSchemes = colorScheme.componentsByColorScheme.map((item) =>
    withDefaultColorScheme(item)
  );
  const variants = componentsByVariant.map((item) => withDefaultVariant(item));
  const sizes = componentsBySize.map((item) => withDefaultSize(item));

  return extendTheme(...colorSchemes, ...variants, ...sizes, {
    ...theme,
    userTheme: rest,
  });
};

export const useTheme = () => {
  const dispatch = useDispatch();
  const activeIndexes = useSelector(selectThemeState());
  const colorScheme = getColorSchemeByIndex(activeIndexes.colorScheme);
  const userTheme = getUserThemeByIndex(activeIndexes.userTheme);

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

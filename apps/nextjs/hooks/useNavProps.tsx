import { useCallback } from "react";
import { selectUser, selectIsAppReady, signOutUserThunk } from "store";
import { useAppDispatch, useAppSelector, useTheme } from "hooks";

export function useNavProps() {
  const dispatch = useAppDispatch();
  const { themeState, onThemeOptionChange } = useTheme();
  const user = useAppSelector(selectUser());
  const isAppReady = useAppSelector(selectIsAppReady());
  const onLogout = useCallback(() => dispatch(signOutUserThunk()), [dispatch]);

  return {
    themeState,
    onThemeOptionChange,
    user,
    isAppReady,
    onLogout,
  };
}

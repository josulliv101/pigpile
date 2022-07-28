import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectIsAppReady, signOutUserThunk } from "../store";
import { useTheme } from "../hooks";

export function useNavProps() {
  const dispatch = useDispatch();
  const { themeState, onThemeOptionChange } = useTheme();
  const user = useSelector(selectUser());
  const isAppReady = useSelector(selectIsAppReady());
  const onLogout = useCallback(() => dispatch(signOutUserThunk()), [dispatch]);

  return {
    themeState,
    onThemeOptionChange,
    user,
    isAppReady,
    onLogout,
  };
}

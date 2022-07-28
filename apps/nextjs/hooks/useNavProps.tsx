import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useColorMode } from "@josulliv101/core";
import {
  selectAppState,
  selectUser,
  selectIsAppReady,
  signOutUser,
} from "../store";
import { useTheme } from "../hooks";

export function useNavProps() {
  const dispatch = useDispatch();
  const { themeState, onThemeOptionChange } = useTheme("");
  const user = useSelector(selectUser());
  const { isMobileNavOpen } = useSelector(selectAppState());
  const isAppReady = useSelector(selectIsAppReady());
  const onLogout = useCallback(() => dispatch(signOutUser()), [dispatch]);

  return {
    themeState,
    onThemeOptionChange,
    user,
    isAppReady,
    onLogout,
  };
}

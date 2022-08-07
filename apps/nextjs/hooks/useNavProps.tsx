import { useCallback } from "react";
import { selectUser, getAuthApi } from "store";
import { useAppDispatch, useAppSelector, useTheme } from "hooks";

export function useNavProps() {
  const dispatch = useAppDispatch();
  const { themeState, onThemeOptionChange } = useTheme();
  const user = useAppSelector(selectUser());
  const onLogout = useCallback(async () => {
    const { signOutUserThunk } = await getAuthApi(dispatch);
    dispatch(signOutUserThunk());
  }, [dispatch]);

  return {
    themeState,
    onThemeOptionChange,
    user,
    onLogout,
  };
}

import { useCallback } from "react";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { ButtonGroup, HTMLChakraProps, IconButton } from "@pigpile/core";
import { ThemeMenu, UserProfileMenu } from "@pigpile/composites";
import { themeOptions } from "@pigpile/theme";
import { selectUser, selectIsAppReady, signOutUser } from "../../../store";
import { useTheme } from "../../../hooks";
import { Nav } from "./Nav";

export const NavHooked: React.FC<HTMLChakraProps<"nav">> = (props) => {
  const dispatch = useDispatch();
  const { themeState, onThemeOptionChange } = useTheme("");
  const user = useSelector(selectUser());
  const isAppReady = useSelector(selectIsAppReady());
  const onLogout = useCallback(() => dispatch(signOutUser()), [dispatch]);
  return (
    <Nav
      isAppReady={isAppReady}
      user={user}
      themeState={themeState}
      onLogout={onLogout}
      onThemeOptionChange={onThemeOptionChange}
      {...props}
    />
  );
};

import NextLink from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { User } from "@josulliv101/types";
import {
  ButtonGroup,
  HTMLChakraProps,
  IconButton,
  useBreakpointValue,
} from "@josulliv101/core";
import { ThemeMenu, UserProfileMenu } from "@josulliv101/composites";
import { themeOptions } from "@josulliv101/theme";
import { ThemeState } from "store";

export interface NavProps extends HTMLChakraProps<"nav"> {
  children?: React.ReactNode;
  isAppReady?: boolean;
  themeState: ThemeState;
  user?: User | null;
  onLogout: () => void;
  onThemeOptionChange: (s: string, index: number) => void;
}

export const Nav: React.FC<NavProps> = ({
  children,
  themeState,
  user,
  onLogout,
  onThemeOptionChange,
  ...props
}) => {
  const viewportSize = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isUserAuthenticated = user?.isAnonymous === false;

  return (
    <ButtonGroup
      as="nav"
      display={{ base: "none", md: "flex" }}
      pr="8"
      size="sm"
      spacing="2"
      {...props}
    >
      <ThemeMenu
        key={viewportSize} // force close when viewport changes to/from mobile
        activeIndexes={themeState}
        boxSize={6}
        onThemeOptionChange={onThemeOptionChange}
        themeOptions={themeOptions}
      />
      {!isUserAuthenticated ? (
        <NextLink
          href="/login"
          passHref
        >
          <IconButton
            _focusVisible={{ outlineColor: "white" }}
            aria-label="Theme"
            as="a"
            borderColor="transparent"
            color="gray.50"
            colorScheme="blackAlpha"
            icon={<FaUserAlt color="gray.300" />}
            variant="outline"
          />
        </NextLink>
      ) : (
        <UserProfileMenu
          onLogout={onLogout}
          user={user}
        />
      )}
      {children}
    </ButtonGroup>
  );
};

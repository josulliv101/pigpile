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

export interface NavProps extends HTMLChakraProps<"nav"> {
  children?: React.ReactNode;
  isAppReady?: boolean;
  themeState: any;
  user?: User | null;
  onLogout: () => void;
  onThemeOptionChange: (s: string, index: number) => void;
}

export const Nav: React.FC<NavProps> = ({
  children,
  isAppReady,
  themeState,
  user,
  onLogout,
  onThemeOptionChange,
  ...props
}) => {
  const viewportSize = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isUserAuthenticated = user?.isAnonymous === false;

  if (!isAppReady) {
    return null;
  }

  return (
    <ButtonGroup
      as="nav"
      size="sm"
      spacing="2"
      display={{ base: "none", md: "flex" }}
      pr="8"
      {...props}
    >
      <ThemeMenu
        key={viewportSize} // force close when viewport changes to/from mobile
        boxSize={6}
        themeOptions={themeOptions}
        activeIndexes={themeState}
        onThemeOptionChange={onThemeOptionChange}
      />
      {!isUserAuthenticated ? (
        <NextLink
          href="/login"
          passHref
        >
          <IconButton
            as="a"
            variant="outline"
            colorScheme="blackAlpha"
            borderColor="transparent"
            aria-label="Theme"
            color="gray.50"
            icon={<FaUserAlt color="gray.300" />}
            _focusVisible={{ outlineColor: "white" }}
          />
        </NextLink>
      ) : (
        <UserProfileMenu
          user={user}
          onLogout={onLogout}
        />
      )}
      {children}
    </ButtonGroup>
  );
};

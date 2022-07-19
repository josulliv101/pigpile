import NextLink from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { ButtonGroup, HTMLChakraProps, IconButton } from "@josulliv101/core";
import { ThemeMenu, UserProfileMenu } from "@josulliv101/composites";
import { themeOptions } from "@josulliv101/theme";

export interface User {
  displayName: string;
  isAdmin: boolean;
  isAnonymous: boolean;
}

export interface NavProps extends HTMLChakraProps<"nav"> {
  children?: React.ReactNode;
  isAppReady?: boolean;
  themeState: any;
  user?: User | null;
  onLogout: () => void;
  onThemeOptionChange: () => void;
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
  const isUserAuthenticated = user?.isAnonymous === false;

  if (!isAppReady) {
    return null;
  }

  return (
    <ButtonGroup
      as="nav"
      size="sm"
      spacing="2"
      display={{ base: "none", sm: "flex" }}
      {...props}
    >
      <ThemeMenu
        boxSize={6}
        themeOptions={themeOptions}
        activeIndexes={themeState}
        onThemeOptionChange={onThemeOptionChange}
      />
      {!isUserAuthenticated ? (
        <NextLink href="/login" passHref>
          <IconButton
            as="a"
            variant="outline"
            colorScheme="blackAlpha"
            borderColor="transparent"
            aria-label="Theme"
            color="gray.50"
            icon={<FaUserAlt color="gray.300" />}
          />
        </NextLink>
      ) : (
        <UserProfileMenu user={user} onLogout={onLogout} />
      )}
      {children}
    </ButtonGroup>
  );
};

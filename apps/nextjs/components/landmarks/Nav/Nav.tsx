import NextLink from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { ButtonGroup, HTMLChakraProps, IconButton } from "@pigpile/core";
import { ThemeMenu, UserProfileMenu } from "@pigpile/composites";
import { themeOptions } from "@pigpile/theme";

export interface User {
  displayName: string;
  isAdmin: boolean;
  isAnonymous: boolean;
}

export interface NavProps extends HTMLChakraProps<"nav"> {
  children?: React.ReactNode;
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onThemeOptionChange: () => void;
}

export const Nav: React.FC<NavProps> = ({
  children,
  user,
  onLogin,
  onLogout,
  onThemeOptionChange,
  ...props
}) => {
  const isUserAuthenticated = user?.isAnonymous === false;
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
        onThemeOptionChange={onThemeOptionChange}
      />
      {!isUserAuthenticated ? (
        <NextLink href="/login" passHref>
          <IconButton
            // onClick={onLogin}
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

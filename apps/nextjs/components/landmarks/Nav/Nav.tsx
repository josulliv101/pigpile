import { ButtonGroup, HTMLChakraProps, IconButton } from "@pigpile/core";
import { ThemeMenu, UserProfileMenu } from "@pigpile/composites";
import { themeOptions } from "@pigpile/theme";
import { FaUserAlt } from "react-icons/fa";

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
        <IconButton
          onClick={onLogin}
          variant="outline"
          colorScheme="blackAlpha"
          borderColor="transparent"
          aria-label="Theme"
          color="gray.50"
          icon={<FaUserAlt boxSize="5" color="gray.300" />}
        />
      ) : (
        <UserProfileMenu user={user} onLogout={onLogout} />
      )}
      {children}
    </ButtonGroup>
  );
};

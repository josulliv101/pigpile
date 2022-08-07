import { Button, ButtonGroup, VisuallyHidden } from "@josulliv101/core";
import { GithubAuthProvider } from "@josulliv101/connect-client";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";

const githubAuthProvider = new GithubAuthProvider();

const providers = [
  { name: "Google", icon: <GoogleIcon boxSize="5" /> },
  { name: "Twitter", icon: <TwitterIcon boxSize="5" /> },
  { name: "GitHub", icon: <GitHubIcon boxSize="5" /> },
];

export interface OAuthButtonGroupProps {
  onSignInWithProvider: (provider: unknown) => void;
}

export const OAuthButtonGroup: React.FC<OAuthButtonGroupProps> = ({ onSignInWithProvider }) => {
  return (
    <ButtonGroup
      size="md"
      spacing="4"
      variant="outline"
      width="full"
    >
      {providers.map(({ name, icon }) => (
        <Button
          key={name}
          _dark={{ borderColor: "gray.600" }}
          _hover={{ bgColor: "blackAlpha.100" }}
          bgColor={{ base: "whiteAlpha.100", sm: "blackAlpha.50" }}
          borderColor="gray.300"
          color="inherit"
          // TODO Add google & twitter providers
          colorScheme="whiteAlpha"
          onClick={() =>
            onSignInWithProvider(name === "GitHub" ? githubAuthProvider : { providerId: name })
          }
          width="full"
        >
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};

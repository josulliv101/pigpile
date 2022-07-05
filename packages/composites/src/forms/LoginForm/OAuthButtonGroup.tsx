import { Button, ButtonGroup, VisuallyHidden } from "@pigpile/core";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";

const providers = [
  { name: "Google", icon: <GoogleIcon boxSize="5" /> },
  { name: "Twitter", icon: <TwitterIcon boxSize="5" /> },
  { name: "GitHub", icon: <GitHubIcon boxSize="5" /> },
];

export interface OAuthButtonGroupProps {
  onSignInWithProvider: () => void;
}

export const OAuthButtonGroup: React.FC<OAuthButtonGroupProps> = ({
  onSignInWithProvider,
}) => {
  return (
    <ButtonGroup size="md" variant="outline" spacing="4" width="full">
      {providers.map(({ name, icon }) => (
        <Button
          key={name}
          width="full"
          borderColor="gray.200"
          color="black"
          onClick={onSignInWithProvider}
        >
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};

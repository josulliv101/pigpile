import { FaGithub } from "react-icons/fa";
import { IconButton, IconButtonProps } from "@josulliv101/core";

export const GitHubExternalLink: React.FC<
  Omit<IconButtonProps, "aria-label">
> = (props) => {
  return (
    <IconButton
      aria-label="Check out the code on GitHub"
      as="a"
      color="gray.500"
      colorScheme="blackAlpha"
      fontSize={{ base: "1.5rem", md: "1.25rem" }}
      href="https://github.com/josulliv101"
      icon={<FaGithub fontSize="inherit" />}
      target="_blank"
      variant="ghost"
      {...props}
    />
  );
};

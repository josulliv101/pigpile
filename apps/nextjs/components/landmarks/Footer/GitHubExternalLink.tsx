import { FaGithub } from "react-icons/fa";
import { IconButton, IconButtonProps } from "@josulliv101/core";

export const GitHubExternalLink: React.FC<Omit<IconButtonProps, "aria-label">> =
  (props) => {
    return (
      <IconButton
        as="a"
        href="https://github.com/josulliv101"
        target="_blank"
        fontSize={{ base: "1.5rem", md: "1.25rem" }}
        icon={<FaGithub fontSize="inherit" />}
        color="gray.500"
        variant="ghost"
        colorScheme="blackAlpha"
        aria-label="Check out the code on GitHub"
        {...props}
      />
    );
  };

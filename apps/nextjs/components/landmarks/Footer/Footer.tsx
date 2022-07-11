import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ButtonGroup,
  Button,
  Container,
  HStack,
  HTMLChakraProps,
  IconButton,
  Logo,
  Show,
  Stack,
  Text,
  useBreakpointValue,
} from "@pigpile/core";
import { FooterSmall } from "./FooterSmall";
import { FooterDefault } from "./FooterDefault";

interface FooterProps extends HTMLChakraProps<"footer"> {
  size: string;
}

export const Footer: React.FC<HTMLChakraProps<"footer">> = ({
  size,
  ...props
}) => {
  const Component = size === "sm" ? FooterSmall : FooterDefault;
  return <Component {...props} />;
};

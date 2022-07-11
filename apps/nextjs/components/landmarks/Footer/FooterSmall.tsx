import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ButtonGroup,
  Button,
  Container,
  HStack,
  IconButton,
  Logo,
  Show,
  Stack,
  Text,
  useBreakpointValue,
} from "@pigpile/core";

export const FooterSmall: React.FC<HTMLChakraProps<"footer">> = (props) => {
  const breakPoint = useBreakpointValue({
    base: "base",
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: "2", md: "4" }}
      {...props}
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <HStack>
            <Text fontSize="sm" color="gray.200" opacity=".8">
              &copy; {new Date().getFullYear()} Pigpile Corporation. All rights
              reserved. (breakpoint value is {breakPoint})
            </Text>
            {/*<Logo boxSize={5} bgColor="gray.600" fill="gray.500" shadow="none" borderWidth="0" opacity=".4" />*/}
          </HStack>
          <Show above="sm">
            <ButtonGroup variant="ghost" opacity=".8" spacing="4">
              <Button color="gray.300">About</Button>
              <Button color="gray.300">Contact</Button>
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                color="gray.300"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Show>
        </Stack>
      </Stack>
    </Container>
  );
};

import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  HTMLChakraProps,
  Show,
  Stack,
  Text,
} from "@josulliv101/core";
import { NavLink, NavLinkProps } from "components/landmarks";
import { GitHubExternalLink } from "./GitHubExternalLink";

export const FooterNavLink: React.FC<NavLinkProps> = (props) => (
  <NavLink
    color="gray.200"
    fontWeight="normal"
    size="sm"
    {...props}
  />
);

export const FooterSmall: React.FC<HTMLChakraProps<"footer">> = (props) => {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0), rgba(28,41,29,.6))"
      pt="8"
      {...props}
    >
      <Container
        as="footer"
        py="2"
        role="contentinfo"
      >
        <Stack
          opacity=".9"
          spacing={{ base: "4", md: "5" }}
        >
          <Stack
            align="center"
            direction="row"
            justify="space-between"
          >
            <HStack>
              <Text
                color="gray.300"
                fontSize="sm"
              >
                &copy; {new Date().getFullYear()} Pigpile Corporation.{" "}
                <Box
                  as="span"
                  whiteSpace="nowrap"
                >
                  All rights reserved.
                </Box>
              </Text>
            </HStack>
            <Show above="sm">
              <ButtonGroup
                colorScheme="blackAlpha"
                spacing="0"
                variant="ghost"
              >
                <FooterNavLink href="/about">About</FooterNavLink>
                <FooterNavLink href="/">Privacy</FooterNavLink>
                <FooterNavLink href="/">Terms of Use</FooterNavLink>
                <GitHubExternalLink
                  color="gray.200"
                  size="sm"
                />
              </ButtonGroup>
            </Show>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

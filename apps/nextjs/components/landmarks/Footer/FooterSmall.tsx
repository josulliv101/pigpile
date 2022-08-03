import NextLink from "next/link";
import { ReactChild } from "react";
import { FaGithub } from "react-icons/fa";
import {
  Box,
  ButtonGroup,
  Button,
  Container,
  HStack,
  HTMLChakraProps,
  IconButton,
  Show,
  Stack,
  Text,
} from "@josulliv101/core";
import { NavLink, NavLinkProps } from "components/landmarks";

export const FooterNavLink: React.FC<NavLinkProps> = (props) => (
  <NavLink size="sm" color="gray.200" fontWeight="normal" {...props} />
);

export const FooterSmall: React.FC<HTMLChakraProps<"footer">> = (props) => {
  return (
    <Box pt="8" bg="linear-gradient(rgba(0,0,0,0), rgba(28,41,29,.6))" {...props}>
      <Container as="footer" role="contentinfo" py="2">
        <Stack spacing={{ base: "4", md: "5" }} opacity=".9">
          <Stack justify="space-between" direction="row" align="center">
            <HStack>
              <Text fontSize="sm" color="gray.300">
                &copy; {new Date().getFullYear()} Pigpile Corporation.{" "}
                <Box as="span" whiteSpace="nowrap">
                  All rights reserved.
                </Box>
              </Text>
            </HStack>
            <Show above="sm">
              <ButtonGroup variant="ghost" spacing="0" colorScheme="blackAlpha">
                <FooterNavLink href="/about">About</FooterNavLink>
                <FooterNavLink href="/about">Privacy</FooterNavLink>
                <FooterNavLink href="/about">Terms of Use</FooterNavLink>
                <IconButton
                  as="a"
                  href="https://github.com/josulliv101"
                  target="_blank"
                  aria-label="GitHub"
                  color="gray.200"
                  size="sm"
                  icon={<FaGithub fontSize="1.0rem" />}
                />
              </ButtonGroup>
            </Show>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

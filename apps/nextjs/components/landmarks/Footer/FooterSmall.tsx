import NextLink from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Box,
  ButtonGroup,
  Button,
  Container,
  HStack,
  IconButton,
  Logo,
  Show,
  Stack,
  Text,
} from "@josulliv101/core";

const NavLink = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Button size="sm" color="gray.200" fontWeight="normal">
      {children}
    </Button>
  </NextLink>
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
              {/*<Logo boxSize={5} bgColor="gray.600" fill="gray.500" shadow="none" borderWidth="0" opacity=".4" />*/}
            </HStack>
            <Show above="sm">
              <ButtonGroup variant="ghost" spacing="0" colorScheme="blackAlpha">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/about">Privacy</NavLink>
                <NavLink href="/about">Terms of Use</NavLink>
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

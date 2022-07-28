import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Logo,
  Stack,
  Text,
} from "@josulliv101/core";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLabelBundle } from "../../../hooks";

function Link({ children, ...props }) {
  return (
    <Button
      size="sm"
      variant="link"
      fontWeight="normal"
      color="gray.500"
      {...props}
    >
      {children}
    </Button>
  );
}

export const FooterDefault = () => {
  const { getLabel, setLabelBundleId } = useLabelBundle();
  return (
    <Box bgColor="gray.200" color="gray.500">
      <Container as="footer" mt={{ base: 4, md: 0 }} role="contentinfo" px="8">
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "4", md: "12" }}
        >
          <Stack
            direction={{ base: "column-reverse", lg: "row" }}
            spacing={{ base: "12", md: "8" }}
            justifyContent="space-between"
          >
            <Stack
              bgColor={{ base: "blackAlpha.50", md: "transparent" }}
              px={{ base: 10, md: 0 }}
              py={{ base: 6, md: 0 }}
              direction={{ base: "column", sm: "row" }}
              spacing="6"
            >
              <Stack
                borderBottomWidth={{ base: "1px", sm: 0 }}
                borderColor="blackAlpha.200"
                pb={{ base: 6, sm: 0 }}
                spacing="4"
                minW={{ base: 30, md: 36 }}
                flex="1"
              >
                <Text fontSize="sm" fontWeight="semibold">
                  Quick Links
                </Text>
                <Stack spacing={{ base: 1, sm: 2 }} shouldWrapChildren>
                  <Link>Home</Link>
                  <Link>About</Link>
                  <Link>View Pigpiles</Link>
                </Stack>
              </Stack>
              <Stack
                borderBottomWidth={{ base: "1px", sm: 0 }}
                borderColor="blackAlpha.200"
                pb={{ base: 6, sm: 0 }}
                spacing="4"
                minW={{ base: 30, md: 36 }}
                flex="1"
              >
                <Text fontSize="sm" fontWeight="semibold">
                  Legal
                </Text>
                <Stack spacing={{ base: 1, sm: 2 }} shouldWrapChildren>
                  <Link>Privacy</Link>
                  <Link>Terms</Link>
                  <Link>License</Link>
                </Stack>
              </Stack>
              <Stack spacing="4" minW={{ base: 30, md: 36 }} flex="1">
                <Text fontSize="sm" fontWeight="semibold">
                  Social
                </Text>
                <Stack spacing={{ base: 1, sm: 2 }} shouldWrapChildren>
                  <Link>Twitter</Link>
                  <Link>Facebook</Link>
                  <Link>Instagram</Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack pt="" spacing="4" flexBasis="42%">
              <HStack spacing="3" align="center">
                <Logo
                  bgColor="gray.500"
                  fill="gray.200"
                  boxSize="8"
                  boxShadow="none"
                />
                <Text
                  fontFamily="brand"
                  color="gray.500"
                  fontWeight="normal"
                  fontSize={{ base: "lg", sm: "2xl" }}
                >
                  {getLabel("tagline")}.
                </Text>
              </HStack>
              <Text fontSize="md">
                Founded in 2018, Pigpile Corporation provides a comprehensive
                range of services to nearly 2,000 homeless men and women each
                day. We are the largest homeless services provider in New
                England, and could not do this important work without the
                support of our donors and local community.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          pt="0"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Stack
            alignItems={{ base: "center", md: "flex-start" }}
            direction="column"
            spacing="0"
          >
            <Text align="center" fontSize="xs" color="subtle">
              {getLabel("address")}
            </Text>
            <Text align="center" fontSize="xs" color="subtle">
              &copy; {new Date().getFullYear()} {getLabel("orgFormal")}.{" "}
              {getLabel("copyright")}
            </Text>
          </Stack>
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            fontSize={{ base: "1.5rem", md: "1.25rem" }}
            icon={<FaGithub fontSize="inherit" />}
            color="gray.500"
            variant="ghost"
            colorScheme="blackAlpha"
            // pb={{ base: "0", md: "0" }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

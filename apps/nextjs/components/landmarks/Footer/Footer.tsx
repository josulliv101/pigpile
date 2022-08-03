import NextLink from "next/link";
import { forwardRef } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Logo,
  Stack,
  Text,
  HTMLChakraProps,
} from "@josulliv101/core";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLabelBundle } from "@josulliv101/labelbundles";

const Link: React.FC<HTMLChakraProps<"div">> = forwardRef(({ children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      size="sm"
      variant="link"
      fontWeight="normal"
      color="gray.500"
      _dark={{ bgColor: "gray.500", color: "gray.200" }}
      {...props}
    >
      {children}
    </Button>
  );
});

export const Footer = () => {
  const { getLabel } = useLabelBundle();
  return (
    <Box bgColor="gray.200" color="gray.500" _dark={{ bgColor: "gray.500", color: "gray.200" }}>
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
                  {getLabel("Quick Links")}
                </Text>
                <Stack spacing={{ base: 1, sm: 2 }} shouldWrapChildren>
                  <NextLink href="/" passHref>
                    <Link>{getLabel("Home")}</Link>
                  </NextLink>
                  <NextLink href="/pigpiles" passHref>
                    <Link>{getLabel("View Pigpiles")}</Link>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <Link>{getLabel("About")}</Link>
                  </NextLink>
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
                  {getLabel("Legal")}
                </Text>
                <Stack spacing={{ base: 1, sm: 2 }} shouldWrapChildren>
                  <Link>{getLabel("Privacy")}</Link>
                  <Link>{getLabel("Terms")}</Link>
                  <Link>{getLabel("License")}</Link>
                </Stack>
              </Stack>
              <Stack spacing="4" minW={{ base: 30, md: 36 }} flex="1">
                <Text fontSize="sm" fontWeight="semibold">
                  {getLabel("Social")}
                </Text>
                <Stack spacing={{ base: 1, sm: 2 }} shouldWrapChildren>
                  <Link
                    as="a"
                    leftIcon={<FaTwitter />}
                    href="http://www.twitter.com"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                  <Link
                    as="a"
                    leftIcon={<FaFacebook />}
                    href="http://www.facebook.com"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                  <Link
                    as="a"
                    leftIcon={<FaInstagram />}
                    href="http://www.instagram.com.com"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack pt="" spacing="4" flexBasis="42%">
              <HStack spacing="3" align="center">
                <Logo bgColor="gray.500" fill="gray.200" boxSize="8" boxShadow="none" />
                <Text
                  fontFamily="brand"
                  color="gray.500"
                  fontWeight="normal"
                  fontSize={{ base: "lg", sm: "2xl" }}
                  _dark={{ bgColor: "gray.500", color: "gray.200" }}
                >
                  {getLabel("tagline")}.
                </Text>
              </HStack>
              <Text fontSize="md">
                Pigpile Corporation provides an online fund-raising app dedicated to helping good
                causes raise funds & in-kind donations. The app is free to use &ndash; no charges or
                service fees for creating a fundraiser.
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
          <Stack alignItems={{ base: "center", md: "flex-start" }} direction="column" spacing="0">
            <Text align="center" fontSize="xs" color="subtle">
              {getLabel("address")}
            </Text>
            <Text align="center" fontSize="xs" color="subtle">
              &copy; {new Date().getFullYear()} {getLabel("orgFormal")}. {getLabel("copyright")}
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
          />
        </Stack>
      </Container>
    </Box>
  );
};

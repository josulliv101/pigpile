import { Box, Container, HStack, Logo, Stack, Text, HTMLChakraProps } from "@josulliv101/core";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLabelBundle } from "@josulliv101/labelbundles";
import { FooterNavLink, NavLinkProps } from "components/landmarks";
import { GitHubExternalLink } from "./GitHubExternalLink";

const Link: React.FC<NavLinkProps> = (props) => {
  return (
    <FooterNavLink
      _dark={{ bgColor: "gray.500", color: "gray.200" }}
      color="gray.500"
      variant="link"
      {...props}
    />
  );
};

export const Footer: React.FC<HTMLChakraProps<"div">> = (props) => {
  const { getLabel } = useLabelBundle();
  return (
    <Box
      _dark={{ bgColor: "gray.500", color: "gray.200" }}
      bgColor="gray.200"
      color="gray.500"
      {...props}
    >
      <Container
        as="footer"
        mt={{ base: 4, md: 0 }}
        px="8"
        role="contentinfo"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "4", md: "12" }}
          spacing="8"
        >
          <Stack
            direction={{ base: "column-reverse", lg: "row" }}
            justifyContent="space-between"
            spacing={{ base: "12", md: "8" }}
          >
            <Stack
              bgColor={{ base: "blackAlpha.50", md: "transparent" }}
              direction={{ base: "column", sm: "row" }}
              px={{ base: 10, md: 0 }}
              py={{ base: 6, md: 0 }}
              spacing="6"
            >
              <Stack
                borderBottomWidth={{ base: "1px", sm: 0 }}
                borderColor="blackAlpha.200"
                flex="1"
                minW={{ base: 30, md: 36 }}
                pb={{ base: 6, sm: 0 }}
                spacing="4"
              >
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  {getLabel("Quick Links")}
                </Text>
                <Stack
                  shouldWrapChildren
                  spacing={{ base: 1, sm: 2 }}
                >
                  <Link href="/">{getLabel("Home")}</Link>
                  <Link href="/pigpiles">{getLabel("View Pigpiles")}</Link>
                  <Link href="/about">{getLabel("About")}</Link>
                </Stack>
              </Stack>
              <Stack
                borderBottomWidth={{ base: "1px", sm: 0 }}
                borderColor="blackAlpha.200"
                flex="1"
                minW={{ base: 30, md: 36 }}
                pb={{ base: 6, sm: 0 }}
                spacing="4"
              >
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  {getLabel("Legal")}
                </Text>
                <Stack
                  shouldWrapChildren
                  spacing={{ base: 1, sm: 2 }}
                >
                  <Link href="/">{getLabel("Privacy")}</Link>
                  <Link href="/">{getLabel("Terms")}</Link>
                  <Link href="/">{getLabel("License")}</Link>
                </Stack>
              </Stack>
              <Stack
                flex="1"
                minW={{ base: 30, md: 36 }}
                spacing="4"
              >
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  {getLabel("Social")}
                </Text>
                <Stack
                  shouldWrapChildren
                  spacing={{ base: 1, sm: 2 }}
                >
                  <Link
                    as="a"
                    href="http://www.twitter.com"
                    leftIcon={<FaTwitter />}
                    target="_blank"
                  >
                    Twitter
                  </Link>
                  <Link
                    as="a"
                    href="http://www.facebook.com"
                    leftIcon={<FaFacebook />}
                    target="_blank"
                  >
                    Facebook
                  </Link>
                  <Link
                    as="a"
                    href="http://www.instagram.com.com"
                    leftIcon={<FaInstagram />}
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              flexBasis="42%"
              pt=""
              spacing="4"
            >
              <HStack
                align="center"
                spacing="3"
              >
                <Logo
                  bgColor="gray.500"
                  boxShadow="none"
                  boxSize="8"
                  fill="gray.200"
                />
                <Text
                  _dark={{ bgColor: "gray.500", color: "gray.200" }}
                  color="gray.500"
                  fontFamily="brand"
                  fontSize={{ base: "lg", sm: "2xl" }}
                  fontWeight="normal"
                >
                  {getLabel("Pigpile on good causes.")}.
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
          align="center"
          direction={{ base: "column-reverse", md: "row" }}
          justify="space-between"
          pb="12"
          pt="0"
        >
          <Stack
            alignItems={{ base: "center", md: "flex-start" }}
            direction="column"
            spacing="0"
          >
            <Text
              align="center"
              color="subtle"
              fontSize="xs"
            >
              1770 Massachusetts Ave, Cambridge, MA 02140, suite 128
            </Text>
            <Text
              align="center"
              color="subtle"
              fontSize="xs"
            >
              &copy; {new Date().getFullYear()} {getLabel("Pigpile Corporation")}.{" "}
              {getLabel("All rights reserved")}
            </Text>
          </Stack>
          <GitHubExternalLink />
        </Stack>
      </Container>
    </Box>
  );
};

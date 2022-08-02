import NextLink from "next/link";
import {
  Box,
  Button,
  AbsoluteCenter as Center,
  Chester,
  Heading,
  Text,
  useTheme,
} from "@josulliv101/core";
import { LayoutFullViewport } from "components/layouts";

interface PageProps {}

function Home({}: PageProps): JSX.Element {
  const {
    userTheme: { chesterPosition },
  } = useTheme();
  const chesterAnimationProps = {};
  return (
    <>
      <Center w="80%" textAlign="center" color="white" top={{ base: "38%", sm: "36%" }}>
        <Heading size="lg" fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="500" mb="3">
          Pigpile on good causes.
        </Heading>
        <Heading size={{ base: "sm", sm: "md" }} fontWeight="normal" mb="6">
          an online fund-raising platform
        </Heading>
        <Text
          opacity=".9"
          maxW="max"
          px="10px"
          mx="auto"
          mb="12"
          fontSize={{ base: "md", sm: "md" }}
          pt="4"
          borderTop="1px"
          borderColor="whiteAlpha.700"
        >
          Our mission is to inspire giving and help good causes raise funds/in-kind donations.
        </Text>
        <NextLink href="/pigpiles" passHref>
          <Button
            width="full"
            maxWidth="max-content"
            boxShadow="md"
            size="lg"
            fontWeight="semibold"
            variant="solid"
          >
            View Active Pigpiles
          </Button>
        </NextLink>
      </Center>
      <Box
        pos="absolute"
        bottom="20%"
        left={{ base: "28%", lg: "16%" }}
        transform="scale(.46)"
        {...chesterPosition}
      >
        <Chester {...chesterAnimationProps} opacity=".8" />
      </Box>
    </>
  );
}

Home.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutFullViewport {...layoutProps}>{page}</LayoutFullViewport>
);

export default Home;

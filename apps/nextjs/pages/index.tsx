import NextLink from "next/link";
import {
  Button,
  AbsoluteCenter as Center,
  Heading,
  Text,
} from "@josulliv101/core";
import { LayoutFullViewport } from "components/layouts";

function Home(): JSX.Element {
  return (
    <>
      <Center
        w="80%"
        textAlign="center"
        color="white"
        top={{ base: "38%", sm: "36%" }}
      >
        <Heading
          size="lg"
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight="500"
          mb="3"
          sx={{
            "@media screen and (min-height: 200px) and (max-height: 566px)": {
              pt: "30%",
            },
          }}
        >
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
          Our mission is to inspire giving and help good causes raise
          funds/in-kind donations.
        </Text>
        <NextLink href="/pigpiles" passHref>
          <Button
            width="full"
            maxWidth="max-content"
            boxShadow="md"
            size="lg"
            fontWeight="semibold"
            variant="solid"
            _focusVisible={{ outlineColor: "white" }}
          >
            View Active Pigpiles
          </Button>
        </NextLink>
      </Center>
    </>
  );
}

Home.getLayout = (page): JSX.Element => (
  <LayoutFullViewport>{page}</LayoutFullViewport>
);

export default Home;

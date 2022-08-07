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
        color="white"
        textAlign="center"
        top={{ base: "38%", sm: "36%" }}
        w="80%"
      >
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight="500"
          mb="3"
          size="lg"
          sx={{
            "@media screen and (min-height: 200px) and (max-height: 566px)": {
              pt: "30%",
            },
          }}
        >
          Pigpile on good causes.
        </Heading>
        <Heading
          fontWeight="normal"
          mb="6"
          size={{ base: "sm", sm: "md" }}
        >
          an online fund-raising platform
        </Heading>
        <Text
          borderColor="whiteAlpha.700"
          borderTop="1px"
          fontSize={{ base: "md", sm: "md" }}
          maxW="max"
          mb="12"
          mx="auto"
          opacity=".9"
          pt="4"
          px="10px"
        >
          Our mission is to inspire giving and help good causes raise
          funds/in-kind donations.
        </Text>
        <NextLink
          href="/pigpiles"
          passHref
        >
          <Button
            _focusVisible={{ outlineColor: "white" }}
            boxShadow="md"
            fontWeight="semibold"
            maxWidth="max-content"
            size="lg"
            variant="solid"
            width="full"
          >
            View Pigpiles
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

import react from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  AbsoluteCenter as Center,
  Chester,
  Heading,
  Text,
} from "@pigpile/core";
// import { GetServerSideProps } from "next";
import { LayoutFullViewport } from "../../components/layouts";
// import { StickyBar } from "../../components/landmarks";

// console.log('LayoutBasic', LayoutBasic);
interface PageProps {}

function Home({}: PageProps): JSX.Element {
  const chesterAnimationProps = {}; // useAnimatedChester();
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
          fontSize={{ base: "1.2rem", sm: "1.6rem" }}
          fontWeight="500"
          mb="3"
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
          fontSize={{ base: ".9rem", sm: "1.1rem" }}
          pt="4"
          borderTop="1px"
          borderColor="whiteAlpha.700"
        >
          Our mission is to inspire giving and help good causes raise
          funds/in-kind donations.
        </Text>
        <NextLink href="/long" passHref>
          {/*<Button width="full" maxWidth="max-content" boxShadow="md" size={{ base: "xs", sm: "sm", md: "lg" }} fontWeight={{ base: "normal", md: "semibold" }} py={{ base: 8, md: 12 }} variant="solid">
            Pigpile on The Somerville Homeless Coalition
            <Text fontWeight="normal" fontSize="xs" pos="absolute" bottom=".5rem" right={{ base: "0", base: ".7rem", md: "1.5rem" }}>#sock-drive</Text>
          </Button>*/}
          <Button
            width="full"
            maxWidth="max-content"
            boxShadow="md"
            size={{ base: "md", md: "lg" }}
            fontWeight="semibold"
            variant="solid"
          >
            View Pigpiles
          </Button>
        </NextLink>
      </Center>
      <Box
        pos="absolute"
        bottom="20%"
        left={{ base: "28%", lg: "16%" }}
        transform="scale(.46)"
      >
        <Chester {...chesterAnimationProps} opacity=".8" />
      </Box>
    </>
  );
}

Home.getLayout = (page): JSX.Element => (
  <LayoutFullViewport>{page}</LayoutFullViewport>
);

export default Home;

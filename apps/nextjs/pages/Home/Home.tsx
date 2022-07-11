import react from "react";import NextLink from 'next/link';
import { Box, Button, AbsoluteCenter as Center, Chester, Heading, Text } from "@pigpile/core";
// import { GetServerSideProps } from "next";
import { LayoutBasic, LayoutFullViewport } from "../../components/layouts";
// console.log('LayoutBasic', LayoutBasic);
interface PageProps {
  onClick: () => void;
}

function Home({ onClick }: PageProps): JSX.Element {
  const chesterAnimationProps = {}; // useAnimatedChester();
  return (
    <>
      <Center w="80%" textAlign="center" color="white" top="36%">
        <Heading size="lg" fontSize="1.6rem" fontWeight="500" mb="3">
          Pigpile on good causes.
        </Heading>
        <Heading size="md" fontWeight="normal" mb="6">
          an online fund-raising platform
        </Heading>
        <Text opacity=".9" maxW="max" px="10px" mx="auto" mb="12" fontSize="1.1rem" fontWeight="normal" pt="4" borderTop="1px" borderColor="whiteAlpha.700">
          Our mission is to inspire giving and help good causes raise funds/in-kind donations.
        </Text>
        <NextLink href="/long" passHref>
          <Button boxShadow="md" size="lg" fontSize="1.3rem" fontWeight="semibold" py="12" variant="solid">
            Pigpile on The Somerville Homeless Coalition
            <Text fontWeight="normal" fontSize="xs" pos="absolute" bottom=".5rem" right="1.5rem">#sock-drive</Text>
          </Button>
        </NextLink>
      </Center>
      <Box pos="absolute" bottom="20%" left={{ base: "28%", lg: "16%" }} transform="scale(.46)">
        <Chester {...chesterAnimationProps} opacity=".8" />
      </Box>
    </>
  );
}

Home.getLayout = (page):JSX.Element => <LayoutFullViewport>{ page }</LayoutFullViewport>;

export default Home;


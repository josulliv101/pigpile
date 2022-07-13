import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  Background,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  StickyBar,
  Text,
} from "@pigpile/core";
import {
  CampaignCreationCallout,
  OrganizationCallout,
  Supporters,
} from "@pigpile/composites";
import { LayoutCampaign } from "../../../components/layouts";
import { Hero } from "./Hero";
import { CampaignOverviewBar } from "./CampaignOverviewBar";
import { CampaignDetailsBar } from "./CampaignDetailsBar";
import { mockDonationProps } from "./Supporters/mock";

const landscapeImage =
  "url(https:/pigpile-next.firebaseapp.com/images/landscape.png)";
const SPACING = 10;

export const mockCreatedByProps = {
  createdBy: "Joe Sullivan",
  createdAt: "01/12/2022",
  isEmployee: true,
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/pigpile-next-mvp.appspot.com/o/site%2Fjoe.png?alt=media&token=b986e32a-0060-4036-ab1e-ab2208aee186",
  description: "Sed ut perspiciatis unde omnis iste natus error sit.",
};

export const mockOrgProps = {
  name: "Somerville Homeless Shelter",
  location: "Somervill,e MA",
  url: "http://pigpile.org",
  description:
    "Founded in 1969, Pine Street Inn provides a comprehensive range of services to nearly 2,000 homeless men and women each day. We are the largest homeless services provider in New England, and could not do this important work without the support of our donors and local community.",
};

function Campaign(): JSX.Element {
  return (
    <>
      <Hero />
      <StickyBar />
      <CampaignOverviewBar
        location="Somerville, MA"
        tags={["sock-drive"]}
        overview="This pigpile provides homeless individuals and families with new socks and individualized supportive services and tailored housing solutions with a goal of obtaining and maintaining affordable housing."
      />
      <CampaignDetailsBar
        description="100% of the money pledged for socks goes towards the purchase of brand new socks (shipping is free). If we are able to drive the price of the socks down by buying in bulk or finding online promotional deals, we will use that savings to buy & donate even more socks. All invoices and the final tally of socks will be posted here. Thank you for supporting this pigpile and helping the Somerville Homeless Coalition.

If the Hanes Men's Ultimate Crewsocks (#84UP12) are not available in the size/quantity needed, we will substitute in another sock of equal quality and price. As always, all pledged money for socks goes to the purchase of socks."
      />
      <Container minH="100px">
        <HStack
          w="full"
          direction={{ base: "column", md: "row" }}
          spacing={SPACING}
          align="flex-start"
          mb={SPACING}
        >
          <Stack w="70%" spacing={8}>
            <Supporters {...mockDonationProps} />
            <Divider bgColor="gray.300" />
            <HStack w="full" alignItems="stretch" spacing={4}>
              <OrganizationCallout
                flex="1 0 calc(50% - 10px)"
                {...mockOrgProps}
              />
              <Background
                flex="1 0 calc(50% - 10px)"
                bgImage={landscapeImage}
                bgPosition="20% 50%"
                variant="gradient"
              >
                <Container
                  pos="relative"
                  as={Center}
                  h="full"
                  flexDirection="column"
                  color="white"
                  justifyContent="flex-start"
                  h="full"
                  pt={{ base: "90px", md: "120px" }}
                >
                  <Heading
                    align="center"
                    size="lg"
                    fontSize="1.6rem"
                    fontWeight="500"
                    mb="3"
                    noOfLines={{ base: undefined, md: "5" }}
                  >
                    Help us in our mission to inspire giving and help good
                    causes raise funds/in-kind donations.
                  </Heading>
                </Container>
              </Background>
            </HStack>
          </Stack>
          <Stack w="30%" spacing={4}>
            <CampaignCreationCallout {...mockCreatedByProps} />
          </Stack>
        </HStack>
      </Container>
      <Container>
        <Heading size="md" my="4">
          How It Works
        </Heading>
        {[...Array(3)].map(() => (
          <Box mb="12">
            <Text fontSize="2xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </Text>
          </Box>
        ))}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar",
    },
  };
};

Campaign.getLayout = (page): JSX.Element => (
  <LayoutCampaign>page</LayoutCampaign>
);

export default Campaign;

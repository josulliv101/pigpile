import {
  Background,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Hide,
  HStack,
  Spacer,
  Stack,
  StickyBar,
  Text,
  useTheme,
} from "@josulliv101/core";
import {
  CampaignCreationCallout,
  OrganizationCallout,
  Supporters,
} from "@josulliv101/composites";
import Hero from "./Hero";
import { CampaignOverviewBar } from "./CampaignOverviewBar";
import { CampaignDetailsBar } from "./CampaignDetailsBar";

const mockDonationProps = {
  donations: [
    {
      name: "Joe Sullivan",
      icon: "😊",
      amount: 10,
      donatedAt: "06/19/2022",
    },
    {
      name: "Josie Sullivan",
      icon: "🐭",
      amount: 5,
      donatedAt: "06/18/2022",
    },
    {
      name: "Hoss Sullivan",
      icon: "🤘🏼",
      amount: 20,
      donatedAt: "06/18/2022",
    },
    {
      name: "Lorraine Sullivan",
      icon: "🥰",
      amount: 15,
      donatedAt: "06/18/2022",
    },
    {
      name: "Skunk Sullivan",
      icon: "🥰",
      amount: 15,
      donatedAt: "06/18/2022",
    },
    {
      name: "Heather Sullivan",
      icon: "🥰",
      amount: 15,
      donatedAt: "06/18/2022",
    },
  ],
};

const SPACING = 10;

const mockCreatedByProps = {
  createdBy: "Joe Sullivan",
  createdAt: "01/12/2022",
  isEmployee: true,
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/pigpile-next-mvp.appspot.com/o/site%2Fjoe.png?alt=media&token=b986e32a-0060-4036-ab1e-ab2208aee186",
  // description: "Sed ut perspiciatis unde omnis iste natus error sit.",
};

const mockOrgProps = {
  name: "Somerville Homeless Shelter",
  location: "Somervill,e MA",
  url: "http://pigpile.org",
  description:
    "Founded in 1969, Pine Street Inn provides a comprehensive range of services to nearly 2,000 homeless men and women each day. We are the largest homeless services provider in New England, and could not do this important work without the support of our donors and local community.",
};

function Campaign({ title, descr, descrShort, tags = [] }): JSX.Element {
  const {
    userTheme: { bgImage },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;
  return (
    <>
      <Hero />
      <StickyBar />
      <CampaignOverviewBar
        location="Somerville, MA"
        tags={tags}
        overview={descrShort}
      />
      <CampaignDetailsBar description={descr} />
      <Container minH="100px">
        <HStack
          id="grid-container"
          w="full"
          flexDirection={{ base: "column-reverse", md: "row" }}
          spacing={{ base: 0, md: SPACING }}
          align="flex-start"
          mb={SPACING}
        >
          <Stack w={{ base: "full", md: "70%" }} spacing={{ base: 0, md: 8 }}>
            <Supporters {...mockDonationProps} />
            <Hide below="md">
              <Divider bgColor="gray.600" />
            </Hide>
            <Hide above="md">
              <Spacer p={{ base: "10px", md: 0 }} />
            </Hide>
            <HStack
              w="full"
              alignItems="stretch"
              flexDirection={{ base: "column", lg: "row" }}
              spacing={{ base: 0, lg: 4 }}
            >
              <OrganizationCallout
                flex="1 0 calc(50% - 10px)"
                {...mockOrgProps}
              />
              <Hide above="lg">
                <Spacer p="10px" />
              </Hide>
              <Background
                flex="1 0 calc(50% - 10px)"
                bgImage={landscapeImage}
                bgPosition="20% 50%"
                variant="gradient"
                minH="360px"
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
          <Stack w={{ base: "full", md: "30%" }} spacing={{ base: 0, md: 4 }}>
            <CampaignCreationCallout {...mockCreatedByProps} />
          </Stack>
        </HStack>
      </Container>
      <Container>
        <Heading size="md" my="4">
          How It Works
        </Heading>
        {[...Array(3)].map((_, index) => (
          <Box key={index} mb="12">
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

export default Campaign;

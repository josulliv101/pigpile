import { useSelector } from "react-redux";
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
  Image,
} from "@josulliv101/core";
import {
  Avatar,
  Badge,
  Card,
  CardAvatar,
  CardBackground,
  CardBadge,
  CardContent,
  Chester,
} from "@josulliv101/core";
import {
  CampaignCreationCallout,
  OrganizationCallout,
  Supporters,
} from "@josulliv101/composites";
import Hero from "./Hero";
import { CampaignOverviewBar } from "./CampaignOverviewBar";
import { CampaignDetailsBar } from "./CampaignDetailsBar";
import { selectChesterAnimation } from "store";

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

const img =
  "data:image/png;base64,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";

function Campaign({
  beneficiary,
  title,
  descr,
  descrShort,
  tags = [],
}): JSX.Element {
  const {
    userTheme: { bgImage },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;
  const chesterAnimation = useSelector(selectChesterAnimation());
  return (
    <>
      <Hero beneficiary={beneficiary} />
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
          <Stack w={{ base: "full", md: "76%" }} spacing={{ base: 0, md: 8 }}>
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
          <Stack w={{ base: "full", md: "24%" }} spacing={{ base: 0, md: 4 }}>
            {/*<CampaignCreationCallout {...mockCreatedByProps} />*/}
            <Card
              colorScheme="gray"
              variant="solid"
              size="sm"
              minW="260px"
              pt="36px"
            >
              <CardAvatar
                // sx={{ ">img": { transform: "scale(.8)" } }}
                bgColor="#84a3b2"
                w="24"
                h="24"
                p="4"
                borderRadius="full"
                position="relative"
              >
                <Chester
                  position="relative"
                  left="4px"
                  animationType={chesterAnimation}
                  transform="scale(.8)"
                />
              </CardAvatar>
              <CardBackground h="92px" />
              <CardContent pt="2">
                <Heading size="xs" noOfLines={2} mb="1">
                  Say hello to Chester
                </Heading>
                <Text fontSize="xs">
                  Consectetur, adipisci veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </Text>
              </CardContent>
            </Card>
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

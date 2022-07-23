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
import { selectCampaignDonations, selectChesterAnimation } from "store";

const SPACING = 10;

const mockOrgProps = {
  name: "Somerville Homeless Shelter",
  location: "Somervill,e MA",
  url: "http://pigpile.org",
  description:
    "Founded in 1969, Pine Street Inn provides a comprehensive range of services to nearly 2,000 homeless men and women each day. We are the largest homeless services provider in New England, and could not do this important work without the support of our donors and local community.",
};

function Campaign({
  campaignId,
  beneficiary,
  title,
  descr,
  descrShort,
  goalAmount,
  tags = [],
}): JSX.Element {
  const {
    userTheme: { bgImage },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;
  const chesterAnimation = useSelector(selectChesterAnimation());
  const donations = useSelector(selectCampaignDonations(campaignId));
  const currentAmount = donations?.reduce(
    (acc, d) => acc + (d.quantity || 0),
    0
  );
  return (
    <>
      <Hero
        campaignId={campaignId}
        beneficiary={beneficiary}
        goalAmount={goalAmount}
        currentAmount={currentAmount}
      />
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
            <Supporters donations={donations} />
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

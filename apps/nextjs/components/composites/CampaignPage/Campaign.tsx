import { useMemo } from "react";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Comment, Donation } from "@josulliv101/types";
import {
  Background,
  Box,
  Button,
  Center,
  Circle,
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
  useColorModeValue,
} from "@josulliv101/core";
import {
  CampaignCreationCallout,
  FeaturedComments,
  OrganizationCallout,
  Supporters,
} from "@josulliv101/composites";
import Hero from "./Hero";
import { CampaignOverviewBar } from "./CampaignOverviewBar";
import { CampaignDetailsBar } from "./CampaignDetailsBar";
import { CampaignComment } from "./CampaignComment";
import {
  donationFilterSlice,
  selectCampaignDonations,
  selectChesterAnimation,
  selectDonationFilterState,
} from "store";

const SPACING = 10;

const mockOrgProps = {
  name: "Somerville Homeless Shelter",
  location: "Somervill,e MA",
  url: "http://pigpile.org",
  description:
    "Founded in 1969, Pine Street Inn provides a comprehensive range of services to nearly 2,000 homeless men and women each day. We are the largest homeless services provider in New England, and could not do this important work without the support of our donors and local community.",
};

const getCommentFromDonation = ({
  displayName,
  emoji,
  comment,
  createdAtInMS,
}: Donation): Comment => ({ displayName, emoji, comment, createdAtInMS });

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
  const dispatch = useDispatch();
  const { isSortDesc, ...donationFilter } = useSelector(
    selectDonationFilterState()
  );
  const chesterAnimation = useSelector(selectChesterAnimation());
  const donations = useSelector(selectCampaignDonations(campaignId));

  const comments = useMemo(() => {
    if (!donations) {
      return;
    }
    return donations.filter((d) => !!d.comment).map(getCommentFromDonation);
  }, [donations]);
  const currentAmount = donations?.reduce(
    (acc, d) => acc + (d.quantity || 0),
    0
  );
  const handleDonationFilterChange = (id: string, index: number) =>
    dispatch(donationFilterSlice.actions.setState({ [id]: index }));
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
        beneficiary={beneficiary}
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
            <Supporters
              {...donationFilter}
              donations={donations}
              onChange={handleDonationFilterChange}
            />
            <Box display={{ base: "block", md: "none" }} h="6" w="0" />
            <HStack
              w="full"
              alignItems="stretch"
              flexDirection={{ base: "column", lg: "row" }}
              spacing={{ base: 0, lg: 10 }}
              // bgColor="blackAlpha.300"
              p="0"
            >
              <OrganizationCallout
                flex="1"
                p={{ base: 10, sm: 20, md: 10 }}
                {...mockOrgProps}
              />
              <Box display={{ base: "block", lg: "none" }} h="6" w="0" />
              <Background
                flex="1"
                bgImage={landscapeImage}
                bgPosition="20% 50%"
                variant="gradient"
                minH="360px"
                p={{ base: 10, sm: 20, md: 10 }}
              >
                <Container
                  pos="relative"
                  // as={Center}
                  h="full"
                  flexDirection="column"
                  color="white"
                  justifyContent="flex-start"
                  h="full"
                  pt={{ base: 0, md: "4" }}
                >
                  <Text
                    align="center"
                    // size="lg"
                    fontSize="xl"
                    fontWeight="500"
                    mb="3"
                    noOfLines={{ base: undefined, md: "5" }}
                  >
                    Help us in our mission to inspire giving and help good
                    causes raise funds/in-kind donations.
                  </Text>
                </Container>
              </Background>
            </HStack>
          </Stack>
          <Stack w={{ base: "full", md: "24%" }} spacing={{ base: 4, md: 4 }}>
            {comments?.length && <FeaturedComments comments={comments} />}
            <Card
              p={{ base: 10, sm: 20, md: 10 }}
              colorScheme="gray"
              variant="solid"
              size="sm"
              // minW="260px"
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
                  animate
                />
              </CardAvatar>
              <CardBackground h={{ base: "92px", sm: "132px", md: "92px" }} />
              <CardContent pt="2">
                <Heading size="xs" noOfLines={2} mb="1">
                  Say hello to Chester
                </Heading>
                <Text fontSize="xs">
                  Consectetur, adipisci veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
                </Text>
              </CardContent>
            </Card>
            <Stack color="gray.600" bgColor="#ececec" px="10" py="6">
              <HStack
                alignItems="center"
                justifyContent="flex-start"
                color="gray.900"
                spacing="4"
              >
                <Box opacity=".4">
                  <Avatar
                    color="#cac5bc"
                    bgColor="gray.600"
                    icon={<FaLock color="inherit" fontSize="12px" />}
                    size="sm"
                  />
                </Box>
                <Heading opacity=".7" color="gray.600" size="xs" mb="1">
                  Secure Payment Processing
                </Heading>
              </HStack>
              <Text fontSize="xs">
                Stripe is certified to PCI Service Provider Level 1 &ndash; the
                most stringent level in the industry. <a href="#">Learn more</a>
                .
              </Text>

              {/*https://stripe.com/docs/security/stripe*/}
            </Stack>
            <Spacer p="1" />
          </Stack>
        </HStack>
      </Container>
    </>
  );
}

export default Campaign;

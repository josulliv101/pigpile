import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment, Donation } from "@josulliv101/types";
import { Box, Container, HStack, Spacer, Stack, StickyBar, useTheme } from "@josulliv101/core";
import {
  FeaturedComments,
  MeetChester,
  Organization,
  OurMission,
  SecurePayment,
  Supporters,
} from "@josulliv101/composites";
import {
  donationFilterSlice,
  selectCampaignDonations,
  selectChesterAnimation,
  selectDonationFilterState,
} from "store";
import Hero from "./Hero";
import { CampaignOverviewBar } from "./CampaignOverviewBar";
import { CampaignDetailsBar } from "./CampaignDetailsBar";

const SPACING = 10;

const getCommentFromDonation = ({
  displayName,
  emoji,
  comment,
  createdAtInMS,
}: Donation): Comment => ({ displayName, emoji, comment, createdAtInMS });

function Campaign({
  campaignId,
  beneficiary,
  descr,
  descrShort,
  goalAmount,
  tags = [],
  organizer,
  createdAtInMS,
  location,
  organization,
}): JSX.Element {
  const {
    userTheme: { bgImage },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;
  const dispatch = useDispatch();
  const { isSortDesc, ...donationFilter } = useSelector(selectDonationFilterState());
  const chesterAnimationType = useSelector(selectChesterAnimation());
  const donations = useSelector(selectCampaignDonations(campaignId));

  const comments = useMemo(() => {
    if (!donations) {
      return;
    }
    return donations.filter((d) => !!d.comment).map(getCommentFromDonation);
  }, [donations]);

  const currentAmount = donations?.reduce((acc, d) => acc + (d.quantity || 0), 0);

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
      <CampaignDetailsBar
        beneficiary={beneficiary}
        createdAtInMS={createdAtInMS}
        description={descr}
        organizer={organizer}
      />
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
              p="0"
            >
              <Organization
                flex="1"
                p={{ base: 10, sm: 20, md: 10 }}
                {...organization}
                location={location}
                name={beneficiary}
              />
              <Box display={{ base: "block", lg: "none" }} h="6" w="0" />
              <OurMission bgImage={landscapeImage} />
            </HStack>
          </Stack>
          <Stack w={{ base: "full", md: "24%" }} spacing={{ base: 4, md: 4 }}>
            {comments?.length && <FeaturedComments comments={comments} />}
            <MeetChester animationType={chesterAnimationType} />
            <SecurePayment />
            <Spacer p="1" />
          </Stack>
        </HStack>
      </Container>
    </>
  );
}

export default Campaign;

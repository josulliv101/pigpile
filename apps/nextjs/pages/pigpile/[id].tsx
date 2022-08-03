import Script from "next/script";
import { useCallback, useMemo } from "react";
import { AddedDonation, Comment, Donation } from "@josulliv101/types";
import { adminDb } from "@josulliv101/connect-admin";
import { Box, Container, HStack, Spacer, Stack, StickyBar, useTheme } from "@josulliv101/core";
import {
  FeaturedComments,
  MeetChester,
  Organization,
  OurMission,
  SecurePayment,
  Supporters,
} from "@josulliv101/composites";
import { LayoutCampaign } from "components/layouts";
import { useAppDispatch, useAppSelector, useDonationsSubscription } from "hooks";
import {
  addCampaignDonationThunk,
  campaignsSlice,
  donationFilterSlice,
  paymentSlice,
  selectCampaign,
  selectCampaignDonations,
  selectChesterAnimation,
  selectDonationFilterState,
  wrapper,
} from "store";
import { useLabelBundle } from "hooks";
import Hero from "components/composites/Hero";
import { CampaignOverviewBar } from "components/composites/CampaignOverviewBar";
import { CampaignDetailsBar } from "components/composites/CampaignDetailsBar";

const SPACING = 10;

const getCommentFromDonation = ({
  displayName,
  emoji,
  comment,
  createdAtInMS,
}: Donation): Comment => ({ displayName, emoji, comment, createdAtInMS });

interface Props {
  id: string;
}

export const Campaign: React.FC<Props> = ({ id }): JSX.Element => {
  useDonationsSubscription(id);
  const { getLabelForQuantity } = useLabelBundle();
  const {
    media,
    location,
    beneficiary,
    createdAtInMS,
    campaign,
    goal,
    tags,
    organizer,
    organization,
    donation,
  } = useAppSelector(selectCampaign(id)) || {};
  const {
    userTheme: { bgImage },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;
  const dispatch = useAppDispatch();
  const { isSortDesc, ...donationFilter } = useAppSelector(selectDonationFilterState());
  const chesterAnimationType = useAppSelector(selectChesterAnimation());
  const donations = useAppSelector(selectCampaignDonations(id));

  const handleAdditionalInfoSubmit = useCallback(
    (d: AddedDonation) => dispatch(addCampaignDonationThunk(d)),
    []
  );

  const handleActiveFormStepChange = useCallback(
    (s: string) => dispatch(paymentSlice.actions.setActiveFormStep(s)),
    []
  );

  const handleDonationFilterChange = useCallback(
    (id: string, index: number) => dispatch(donationFilterSlice.actions.setState({ [id]: index })),
    []
  );

  const comments = useMemo(() => {
    if (!donations) {
      return;
    }
    return donations.filter((d) => !!d.comment).map(getCommentFromDonation);
  }, [donations]);

  const currentAmount = donations?.reduce((acc, d) => acc + (d.quantity || 0), 0);

  return (
    <>
      <Script src="https://fast.wistia.com/embed/medias/1wpb65qwkz.jsonp" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
      <Hero
        campaignId={id}
        beneficiary={beneficiary}
        goalAmount={goal?.amount}
        currentAmount={currentAmount}
        onAdditionalInfoSubmit={handleAdditionalInfoSubmit}
        onActiveFormStepChange={handleActiveFormStepChange}
        {...donation}
      />
      <StickyBar />
      <CampaignOverviewBar
        beneficiary={beneficiary}
        tags={tags}
        overview={campaign?.descrShort}
        {...media}
      />
      <CampaignDetailsBar
        beneficiary={beneficiary}
        createdAtInMS={createdAtInMS}
        description={campaign?.descr}
        location={location}
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
              getLabel={(n) => getLabelForQuantity({ one: "item", many: "items" }, n)}
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
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params, res }) => {
  const { id } = params as { id: string };

  res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=1800");

  const snapshot = await adminDb.collection("campaigns").doc(id).get();

  if (snapshot.data()) {
    store.dispatch(campaignsSlice.actions.setCampaign(snapshot.data()));
  }

  return {
    props: {
      id,
    },
  };
});

Campaign.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutCampaign {...layoutProps}>{page}</LayoutCampaign>
);

export default Campaign;

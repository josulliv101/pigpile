import Script from "next/script";
import { useCallback, useMemo } from "react";
import { AddedDonation, Comment, Donation } from "@josulliv101/types";
import { adminDb } from "@josulliv101/connect-admin";
import {
  Box,
  Container,
  HStack,
  Spacer,
  Stack,
  StickyBar,
  useTheme,
} from "@josulliv101/core";
import {
  FeaturedComments,
  MeetChester,
  Organization,
  OurMission,
  SecurePayment,
  Supporters,
} from "@josulliv101/composites";
import { LayoutCampaign } from "components/layouts";
import {
  useAppDispatch,
  useAppSelector,
  useDonationsSubscription,
} from "hooks";
import {
  addCampaignDonationThunk,
  campaignsSlice,
  donationFilterSlice,
  donationStepsSlice,
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
  const { isSortDesc, ...donationFilter } = useAppSelector(
    selectDonationFilterState()
  );
  const chesterAnimationType = useAppSelector(selectChesterAnimation());
  const donations = useAppSelector(selectCampaignDonations(id));

  const handleAdditionalInfoSubmit = useCallback(
    (d: AddedDonation) => dispatch(addCampaignDonationThunk(d)),
    []
  );

  const handleActiveFormStepChange = useCallback(
    (s: string) => dispatch(donationStepsSlice.actions.setActiveFormStep(s)),
    []
  );

  const handleDonationFilterChange = useCallback(
    (id: string, index: number) =>
      dispatch(donationFilterSlice.actions.setState({ [id]: index })),
    []
  );

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

  return (
    <>
      <Script
        src="https://fast.wistia.com/embed/medias/1wpb65qwkz.jsonp"
        strategy="lazyOnload"
      />
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <Hero
        beneficiary={beneficiary}
        campaignId={id}
        currentAmount={currentAmount}
        goalAmount={goal?.amount}
        onActiveFormStepChange={handleActiveFormStepChange}
        onAdditionalInfoSubmit={handleAdditionalInfoSubmit}
        {...donation}
      />
      <StickyBar />
      <CampaignOverviewBar
        beneficiary={beneficiary}
        overview={campaign?.descrShort}
        tags={tags}
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
          align="flex-start"
          flexDirection={{ base: "column-reverse", md: "row" }}
          id="grid-container"
          mb={SPACING}
          spacing={{ base: 0, md: SPACING }}
          w="full"
        >
          <Stack
            spacing={{ base: 0, md: 8 }}
            w={{ base: "full", md: "76%" }}
          >
            <Supporters
              {...donationFilter}
              donations={donations}
              getLabel={(n) =>
                getLabelForQuantity({ one: "item", many: "items" }, n)
              }
              onChange={handleDonationFilterChange}
            />
            <Box
              display={{ base: "block", md: "none" }}
              h="6"
              w="0"
            />
            <HStack
              alignItems="stretch"
              flexDirection={{ base: "column", lg: "row" }}
              p="0"
              spacing={{ base: 0, lg: 10 }}
              w="full"
            >
              <Organization
                flex="1"
                p={{ base: 10, sm: 20, md: 10 }}
                {...organization}
                location={location}
                name={beneficiary}
              />
              <Box
                display={{ base: "block", lg: "none" }}
                h="6"
                w="0"
              />
              <OurMission bgImage={landscapeImage} />
            </HStack>
          </Stack>
          <Stack
            spacing={{ base: 4, md: 4 }}
            w={{ base: "full", md: "24%" }}
          >
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const { id } = params as { id: string };
      const snapshot = await adminDb.collection("campaigns").doc(id).get();

      if (snapshot.data()) {
        store.dispatch(campaignsSlice.actions.setCampaign(snapshot.data()));
      }

      return {
        props: {
          id,
        },
      };
    }
);

Campaign.getLayout = (page): JSX.Element => (
  <LayoutCampaign>{page}</LayoutCampaign>
);

export default Campaign;

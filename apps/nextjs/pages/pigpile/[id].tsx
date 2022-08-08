import dynamic from "next/dynamic";
import Head from "next/head";
import { useCallback, useMemo } from "react";
import { adminDb } from "@josulliv101/connect-admin";
import { StickyBar, useTheme } from "@josulliv101/core";
import { LayoutCampaign } from "components/layouts";
import Hero from "components/composites/Hero";
import { CampaignOverviewBar } from "components/composites/CampaignOverviewBar";
import { CampaignDetailsBar } from "components/composites/CampaignDetailsBar";
import { useAppDispatch, useAppSelector, useDonationsSubscription } from "hooks";
import { useLabelBundle } from "hooks";
import {
  addCampaignDonationThunk,
  campaignsSlice,
  donationFilterSlice,
  donationStepsSlice,
  selectCampaign,
  selectChesterAnimation,
  selectDonationFilterState,
  wrapper,
} from "store";

const CampaignContentLazy = dynamic(
  () => import("components/composites/CampaignContent/CampaignContent"),
  {
    ssr: false,
  }
);

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
  const landscapeImage = bgImage;
  const dispatch = useAppDispatch();
  const { isSortDesc, ...donationFilter } = useAppSelector(selectDonationFilterState());

  const chesterAnimationType = useAppSelector(selectChesterAnimation());

  const handleAdditionalInfoSubmit = useCallback(
    (d: AddedDonation) => dispatch(addCampaignDonationThunk(d)),
    []
  );

  const handleActiveFormStepChange = useCallback(
    (s: string) => dispatch(donationStepsSlice.actions.setActiveFormStep(s)),
    []
  );

  const handleDonationFilterChange = useCallback(
    (id: string, index: number) => dispatch(donationFilterSlice.actions.setState({ [id]: index })),
    []
  );

  const { selectCampaignDonations } = useDonationsSubscription(id);

  const donations = useAppSelector(selectCampaignDonations(id));

  const comments = useMemo(() => {
    if (!donations) {
      return;
    }
    return donations.filter((d) => !!d.comment).map(getCommentFromDonation);
  }, [donations]);

  const currentAmount = donations?.reduce((acc, d) => acc + (d.quantity || 0), 0);

  return (
    <>
      <Head>
        <title>{beneficiary}</title>
        <meta
          content="Pigpile on {beneficiary}"
          name="description"
        />
      </Head>
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
      <CampaignContentLazy
        beneficiary={beneficiary}
        chesterAnimationType={chesterAnimationType}
        comments={comments}
        donationFilter={donationFilter}
        donations={donations}
        getDonationsLabel={(n) => getLabelForQuantity({ one: "item", many: "items" }, n)}
        landscapeImage={landscapeImage}
        location={location}
        onDonationFilterChange={handleDonationFilterChange}
        organization={organization}
      />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
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
});

Campaign.getLayout = (page): JSX.Element => <LayoutCampaign>{page}</LayoutCampaign>;

export default Campaign;

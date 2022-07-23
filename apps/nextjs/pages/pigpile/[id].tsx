import { useDispatch, useSelector } from "react-redux";
import { adminDb } from "@josulliv101/connect-admin";
import { useSubscribeToCampaignDonations } from "@josulliv101/connect-client";
import { Donations } from "@josulliv101/types";
import { LayoutCampaign } from "../../components/layouts";
import { useFoo } from "hooks";
import Content from "../../components/composites/CampaignPage/Campaign";
import {
  campaignsSlice,
  donationsSlice,
  selectCampaign,
  selectIsAppReady,
  wrapper,
} from "../../store";

export function Campaign({ id }): JSX.Element {
  useFoo(id);
  const { beneficiary, campaign, goal, tags } =
    useSelector(selectCampaign(id)) || {};
  console.log("campaign tags prop", id, useSelector(selectCampaign(id)));
  return (
    <Content
      goalAmount={goal.amount}
      campaignId={id}
      beneficiary={beneficiary}
      {...campaign}
      tags={tags}
    />
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, res }) => {
      const { id } = params;

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=600, stale-while-revalidate=1800"
      );

      const snapshot = await adminDb.collection("campaigns").doc(id).get();
      store.dispatch(campaignsSlice.actions.setCampaign(snapshot.data()));
      return {
        props: {
          id,
        },
      };
    }
);

Campaign.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutCampaign {...layoutProps}>{page}</LayoutCampaign>
);

export default Campaign;

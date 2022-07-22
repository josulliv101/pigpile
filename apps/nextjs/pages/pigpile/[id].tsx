import { useSelector } from "react-redux";
import { adminDb } from "@josulliv101/connect-admin";
import { LayoutCampaign } from "../../components/layouts";
import Content from "../../components/composites/CampaignPage/Campaign";
import { campaignsSlice, selectCampaign, wrapper } from "../../store";

export function Campaign({ id }): JSX.Element {
  const { campaign, tags } = useSelector(selectCampaign(id)) || {};
  console.log("campaign tags prop", id, useSelector(selectCampaign(id)));
  return <Content {...campaign} tags={tags} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, res }) => {
      const { id } = params;

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=30, stale-while-revalidate=180"
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

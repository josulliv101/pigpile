import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  Background,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  StickyBar,
  Text,
} from "@pigpile/core";
import { LayoutCampaign } from "../../components/layouts";
import Content from "../../components/composites/CampaignPage/Campaign";
import { fetchCampaign, selectCampaign, wrapper } from "../../store";

export function Campaign({ id }): JSX.Element {
  console.log("campaign id prop", id);
  const { campaign, tags } = useSelector(selectCampaign(id)) || {};
  return (
    <>
      <Content {...campaign} tags={tags} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const { id } = params;
      console.log("getServerSideProps fetching: ", id);
      await store.dispatch(fetchCampaign(id));

      console.log("State on server", id, store.getState());

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

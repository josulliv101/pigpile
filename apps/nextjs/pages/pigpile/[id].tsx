import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
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

export function Campaign(): JSX.Element {
  return (
    <>
      <Content />
    </>
  );
}

/*export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar",
    },
  };
};*/

/*Campaign.getLayout = (page): JSX.Element => (
  <LayoutCampaign>{page}</LayoutCampaign>
);*/

Campaign.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutCampaign {...layoutProps}>{page}</LayoutCampaign>
);

export default Campaign;

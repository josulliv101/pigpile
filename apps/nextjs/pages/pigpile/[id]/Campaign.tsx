import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Box, Container, Heading, StickyBar, Text } from "@pigpile/core";
import { LayoutCampaign } from "../../../components/layouts";
import { Hero } from "./Hero";

function Campaign(): JSX.Element {
  return (
    <>
      <Hero />
      <StickyBar />
      <Container>
        <Heading size="md" my="4">
          Campaign
        </Heading>
        {[...Array(3)].map(() => (
          <Box mb="12">
            <Text>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar",
    },
  };
};

Campaign.getLayout = (page): JSX.Element => (
  <LayoutCampaign>page</LayoutCampaign>
);

export default Campaign;

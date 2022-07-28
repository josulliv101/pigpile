import NextLink from "next/link";
import { useDispatch } from "react-redux";
import { adminDb } from "@josulliv101/connect-admin";
import {
  AbsoluteCenter as Center,
  Button,
  List,
  ListItem,
  ListIcon,
  Logo,
} from "@josulliv101/core";
import { capitalizeFirstLetter, formatAsText } from "@josulliv101/formatting";
import { LayoutFullViewport } from "../../components/layouts";
import { wrapper } from "../../store";

interface PageProps {}

function Pigpiles({ campaignIds }: PageProps): JSX.Element {
  console.log("campaignIds render", campaignIds);
  return (
    <>
      <Center
        w="80%"
        textAlign="center"
        color="white"
        top={{ base: "30%", sm: "30%" }}
        w="max-content"
        textAlign="left"
      >
        <List spacing={3}>
          {campaignIds.map((id) => (
            <NextLink href={`/pigpile/${id}`} passHref>
              <ListItem as={Button} boxShadow="md" display="flex" w="full">
                <ListIcon as={Logo} color="green.500" boxShadow="none" />
                {formatAsText(id, { capitalizeAll: true })}
              </ListItem>
            </NextLink>
          ))}
        </List>
      </Center>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res }) => {
      console.log("PIGPILE");
      const snapshot = await adminDb
        .collection("campaigns-meta")
        .doc("campaign")
        .get();
      let ids = [];
      if (snapshot.data()) {
        //store.dispatch(campaignsSlice.actions.setCampaign(snapshot.data()));
        ids = snapshot.data().ids || [];
      }
      console.log("getServerSideProps entriesData!", snapshot.data());
      return {
        props: {
          campaignIds: ids,
        },
      };
    }
);

Pigpiles.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutFullViewport {...layoutProps}>{page}</LayoutFullViewport>
);

export default Pigpiles;

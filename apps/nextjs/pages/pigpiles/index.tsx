import NextLink from "next/link";
import { adminDb } from "@josulliv101/connect-admin";
import {
  AbsoluteCenter as Center,
  Button,
  List,
  ListItem,
  ListIcon,
  Logo,
} from "@josulliv101/core";
import { formatIdAsText } from "@josulliv101/formatting";
import { LayoutFullViewport } from "../../components/layouts";
import { wrapper } from "../../store";

interface Props {
  campaignIds: string[];
}

function Pigpiles({ campaignIds }: Props): JSX.Element {
  return (
    <>
      <Center
        textAlign="center"
        color="white"
        top={{ base: "30%" }}
        w="max-content"
        display="flex"
        h="full"
        alignItems="center"
      >
        <List spacing={3}>
          {campaignIds.map((id) => (
            <NextLink key={id} href={`/pigpile/${id}`} passHref>
              <ListItem
                as={Button}
                boxShadow="md"
                display="flex"
                w="full"
                _focusVisible={{ outlineColor: "white" }}
              >
                <ListIcon as={Logo} color="green.500" boxShadow="none" />
                {formatIdAsText(id, { capitalizeAll: true })}
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
      const snapshot = await adminDb
        .collection("campaigns-meta")
        .doc("campaign")
        .get();
      const data = snapshot.data();
      let ids = [];

      if (data?.ids) {
        ids = data.ids;
      }
      return {
        props: {
          campaignIds: ids,
        },
      };
    }
);

Pigpiles.getLayout = (page): JSX.Element => (
  <LayoutFullViewport>{page}</LayoutFullViewport>
);

export default Pigpiles;

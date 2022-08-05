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
        alignItems="center"
        color="white"
        display="flex"
        h="full"
        textAlign="center"
        top={{ base: "30%" }}
        w="max-content"
      >
        <List spacing={3}>
          {campaignIds.map((id) => (
            <NextLink
              key={id}
              href={`/pigpile/${id}`}
              passHref
            >
              <ListItem
                _focusVisible={{ outlineColor: "white" }}
                as={Button}
                boxShadow="md"
                display="flex"
                w="full"
              >
                <ListIcon
                  as={Logo}
                  boxShadow="none"
                  color="green.500"
                />
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

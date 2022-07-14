import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@pigpile/core";
import { LayoutBasic } from "../../components/layouts";
import { fetchUser, selectUser, wrapper } from "../../store";

interface PageProps {
  foo: string;
}

function About(props: PageProps): JSX.Element {
  const { locale, locales, defaultLocale } = useRouter();
  const user = useSelector(selectUser("props.id"));
  console.log("About props", props, locale, locales, defaultLocale);
  return (
    <Box>
      <Heading size="md" my="4">
        About
      </Heading>
      <Text>{JSON.stringify(user)}</Text>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </Text>
    </Box>
  );
}

About.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutBasic {...layoutProps}>{page}</LayoutBasic>
);

/*export const getServerSideProps: GetServerSideProps = async (context) => {
  const foobar = await Promise.resolve('foobar');
  console.log('foobar', foobar, context)
  return {
    props: {
      foo: "bar",
      locale: context.locale,
    },
  };
};*/

export default About;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // const {id} = params;

      await store.dispatch(fetchUser("id"));

      console.log("State on server", store.getState());

      return {
        props: {
          id: "joe",
        },
      };
    }
);

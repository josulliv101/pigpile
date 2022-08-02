import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@josulliv101/core";
import { LayoutBasic } from "../../components/layouts";
import { fetchUser, selectUser, wrapper } from "../../store";

interface PageProps {
  foo: string;
}

function About(props: PageProps): JSX.Element {
  return (
    <Box>
      <Heading size="md" my="4">
        About
      </Heading>
      <Text mb="4">
        Thanks for checking out the site. I created it as an example of my work for my job hunt. A
        few years ago I created a company called Pigpile Corporation which was an online
        fund-raising app. This site is a re-imagining of that work but just for demo purposes.
      </Text>
      <Text mb="4">
        Some of the technologies used include react, typescript, nextjs, firebase
        auth/hosting/db/functions, chakra-ui and Stripe. The code is structured as a monorepo using
        yarn workspaces paired with preconstruct. It's fully responsive. I am responsible for the
        design of the app, though the farm & city park bg images associated with each theme were
        purchased from iStock. Chester the pig is my own creation as is the animation of Lewis (the
        character seen in the video on fundraiser pages). Lewis was animated using iClone 8 and his
        voice was created using tools by Replica Studios.
      </Text>
      <Text mb="4">
        Donations for fundraisers are hooked into firebase's subscription snapshots so any new
        incoming donations will be displayed in realtime to users on the site.
      </Text>
      <Text>
        The site is still being actively worked on. Because it is a demo site that receives no real
        traffic, often the firebase cloud functions that run nextjs may sleep until a page is
        requested. When this occurs, the server response time may be a little longer than usual.
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

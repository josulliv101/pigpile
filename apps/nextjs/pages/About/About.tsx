import { Box, Heading, Text } from "@pigpile/core";
import { LayoutBasic } from "../../components/layouts";

interface PageProps {}

function About({}: PageProps): JSX.Element {
  return (
    <Box>
      <Heading size="md" my="4">
        About
      </Heading>
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

About.getLayout = (page): JSX.Element => <LayoutBasic>{page}</LayoutBasic>;

export default About;

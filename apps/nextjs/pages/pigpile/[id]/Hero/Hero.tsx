import { MoreButtons } from "@pigpile/composites";
import {
  AbsoluteCenter,
  Background,
  Chester,
  Center,
  Container,
  CountUpBox,
  Heading,
  Text,
} from "@pigpile/core";
import { useLabelBundle } from "../../../../hooks";

interface HeroProps {}

const landscapeImage =
  "url(https:/pigpile-next.firebaseapp.com/images/landscape.png)";

const chesterAnimationProps = {};
export const options = [
  { label: "1 pair", value: 1.5 },
  { label: "2 pairs", value: 3 },
  { label: "3 pairs", value: 4.5 },
];
const onClick = () => "";
const onCustomClick = () => "";

export const Hero = (): JSX.Element => {
  const { getLabel } = useLabelBundle();
  return (
    <Background
      bgImage={landscapeImage}
      bgPosition="20% 50%"
      variant="gradient"
      h="500px"
    >
      <Container
        pos="relative"
        as={Center}
        maxW="full"
        h="full"
        flexDirection="column"
        color="white"
        justifyContent="flex-start"
        h="full"
        pt={{ base: "90px", md: "120px" }}
      >
        <Heading
          align="center"
          size="lg"
          fontSize="1.6rem"
          fontWeight="500"
          mb="3"
          noOfLines={{ base: undefined, md: "5" }}
        >
          {getLabel(
            "campaign.heroTitle",
            "1,000",
            "pairs of socks",
            "The Somerville Homeless Coalition"
          )}
        </Heading>
        <Heading
          display={{ base: "none", md: "block" }}
          align="center"
          size="md"
          fontWeight="normal"
        >
          Select a donation amount below or choose a{" "}
          <Text
            as="a"
            href="#"
            color="gray.50"
            borderBottom="1px rgba(255,255,255,.7) dashed"
          >
            custom amount
          </Text>
          .
        </Heading>
        <MoreButtons
          mt="12"
          options={options}
          onButtonClick={onClick}
          onCustomButtonClick={onCustomClick}
        />
        <AbsoluteCenter top={{ base: "75%", md: "80%" }}>
          <Chester {...chesterAnimationProps} />
        </AbsoluteCenter>
        <CountUpBox
          minW={{ base: "120px", md: "160px" }}
          bgColor="rgb(203 211 183 / 80%)"
          pos="absolute"
          bottom="10px"
          right={{ base: "10px", md: "20px" }}
          countUpValue={894}
          limit={1000}
          label="894 of 1K socks"
          showLabelOnEnd
        />
      </Container>
    </Background>
  );
};

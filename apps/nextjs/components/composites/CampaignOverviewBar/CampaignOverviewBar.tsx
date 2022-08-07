import { BackgroundContent, Box, Container, HTMLChakraProps, Stack, Text } from "@josulliv101/core";
import { Campaign, Media } from "@josulliv101/types";
import { Tags } from "./Tags";
import { IntroBlurb } from "./IntroBlurb";
import { WistiaVideo } from "./WistiaVideo";

interface Props extends Media, Pick<Campaign, "beneficiary" | "tags">, HTMLChakraProps<"div"> {
  overview: string;
}

export const CampaignOverviewBar: React.FC<Props> = ({
  caption,
  overview,
  beneficiary,
  tags = [],
  videoId,
  ...rootStyle
}) => {
  return (
    <BackgroundContent
      pb={{ base: "20", md: "8" }}
      pt="4"
      {...rootStyle}
    >
      <Container>
        <Tags items={tags} />
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 6, lg: 10 }}
        >
          <IntroBlurb
            blurb={overview}
            title={beneficiary}
          />
          <Box
            _dark={{ bgColor: "whiteAlpha.200" }}
            bgColor="blackAlpha.100"
            borderWidth="0"
            flex="1"
            p="3"
          >
            <WistiaVideo videoId={videoId} />
            <Text
              color="inherit"
              fontSize="xs"
              pt="2"
            >
              {caption}
            </Text>
          </Box>
        </Stack>
      </Container>
    </BackgroundContent>
  );
};

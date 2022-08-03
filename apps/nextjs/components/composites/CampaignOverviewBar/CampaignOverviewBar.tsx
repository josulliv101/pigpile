import { useEffect, useState } from "react";
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
  const [isWistiaReady, setIsWistiaReady] = useState(false);
  const [initWistia, setInitWistia] = useState(false);

  useEffect(() => setInitWistia(true), []);
  return (
    <BackgroundContent pt="4" pb={{ base: "20", md: "8" }} {...rootStyle}>
      <Container>
        <Tags items={tags} />
        <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 0, md: 6, lg: 10 }}>
          <IntroBlurb title={beneficiary} blurb={overview} />
          <Box
            flex="1"
            borderWidth="0"
            p="3"
            bgColor="blackAlpha.100"
            _dark={{ bgColor: "whiteAlpha.200" }}
          >
            {initWistia && (
              <WistiaVideo
                videoId={videoId}
                isWistiaReady={isWistiaReady}
                onLoad={() => setIsWistiaReady(true)}
              />
            )}
            <Text color="inherit" pt="2" fontSize="xs">
              {caption}
            </Text>
          </Box>
        </Stack>
      </Container>
    </BackgroundContent>
  );
};

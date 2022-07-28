import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Background,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Grid,
  GridItem,
  Stack,
  Tag,
  Text,
  useTheme,
} from "@josulliv101/core";
import { FaShareAlt as FaShare } from "react-icons/fa";
import { extendThemedComponent } from "../../../hocs";
import { statusSlice } from "store";

// Extending gives the ability for the new component to have its own defaults (colorScheme, size, variants) which can be set in the theme
export const BackgroundContent = extendThemedComponent("BackgroundContent", {
  Background,
});

function Tags({ items = [] }) {
  return (
    <HStack spacing="1" mb={{ base: 6, md: 2, lg: 1 }}>
      {items && items.map((t) => <Tag key={t}>#{t}</Tag>)}
    </HStack>
  );
}

function IntroBlurb({ title, blurb }) {
  const dispatch = useDispatch();
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mb={{ base: 10, md: 0 }}
    >
      <Heading
        fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
        fontWeight="semibold"
        mb="2"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "1.06rem", lg: "xl" }}
        noOfLines={{ base: 20, md: 5 }}
      >
        {blurb}
      </Text>
      <Button
        onClick={() =>
          dispatch(
            statusSlice.actions.setStatus({
              title: "Functionality Disabled",
              description: "Sharing only works on the production env.",
              status: "info",
            })
          )
        }
        position={{ base: "absolute", md: "static" }}
        bottom="5"
        rightIcon={<FaShare fontSize="14px" />}
        size={{ base: "md", md: "sm", lg: "lg" }}
        borderRadius="full"
        minH="40px"
        maxW={{ base: "90%", sm: "32%" }}
        w={{ base: "full", md: "30%" }}
        mt={{ base: "10", md: "8%" }}
        alignSelf="center"
      >
        Share
      </Button>
    </Box>
  );
}

function WistiaBox({ isWistiaReady = false, videoId = "", onLoad }) {
  if (!videoId) {
    return <Box>A wistia video id is required.</Box>;
  }
  return (
    <Box
      maxH="348px"
      flex="1"
      className="wistia_responsive_padding"
      position="relative"
      padding="56.25% 0 0 0"
    >
      <Box
        className="wistia_responsive_wrapper"
        height="100%"
        left="0"
        position="absolute"
        top="0"
        width="100%"
      >
        <Box
          className={`wistia_embed wistia_async_${videoId} seo=false videoFoam=true playerColor=999999`}
          height="100%"
          position="relative"
          width="100%"
        >
          <Box
            className="wistia_swatch"
            height="100%"
            left="0"
            position="absolute"
            top="0"
            width="100%"
            opacity={isWistiaReady ? 1 : 0}
            overflow="hidden"
            transition="opacity 200ms"
          >
            <Image
              src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
              filter="blur(5px)"
              objectFit="contain"
              height="100%"
              width="100%"
              alt=""
              aria-hidden="true"
              onLoad={onLoad}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export const CampaignOverviewBar = ({
  overview,
  location,
  beneficiary,
  tags = [],
  ...containerProps
}) => {
  const theme = useTheme();
  const [isWistiaReady, setIsWistiaReady] = useState(false);
  const [initWistia, setInitWistia] = useState(false);

  useEffect(() => setInitWistia(true), []);
  return (
    <BackgroundContent pt="4" pb={{ base: "20", md: "8" }} {...containerProps}>
      <Container>
        <Tags items={tags} />
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 6, lg: 10 }}
        >
          <IntroBlurb title={beneficiary} blurb={overview} />
          <Box flex="1">
            {initWistia && (
              <Box
                className="wistia_responsive_padding"
                position="relative"
                padding="56.25% 0 0 0"
              >
                <Box
                  className="wistia_responsive_wrapper"
                  height="100%"
                  left="0"
                  position="absolute"
                  top="0"
                  width="100%"
                >
                  <Box
                    className="wistia_embed wistia_async_1wpb65qwkz seo=false videoFoam=true playerColor=999999"
                    height="100%"
                    position="relative"
                    width="100%"
                  >
                    <Box
                      className="wistia_swatch"
                      height="100%"
                      left="0"
                      position="absolute"
                      top="0"
                      width="100%"
                      opacity={isWistiaReady ? 1 : 0}
                      overflow="hidden"
                      transition="opacity 2000ms"
                    >
                      <Image
                        src="https://fast.wistia.com/embed/medias/1wpb65qwkz/swatch"
                        filter="blur(5px)"
                        objectFit="contain"
                        height="100%"
                        width="100%"
                        alt=""
                        aria-hidden="true"
                        onLoad={() => setIsWistiaReady(true)}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
            <Text color="gray.500" py="2" fontSize="xs">
              Lewis explains why The Somerville Homeless Coalition is so awesome
              and why we're pigpiling on them.
            </Text>
          </Box>
        </Stack>

        {/*      <HStack alignItems="flex-start" spacing="10">
        <Button
          size="lg"
          rightIcon={<FaShare fontSize="14px" />}
          borderRadius="full"
          ml={[0, -5]}
          minW={["100%", 300]}
          flex="1"
        >
          Share
        </Button>
        <Box flex="1">foo</Box>
      </HStack>*/}
      </Container>
    </BackgroundContent>
  );
};

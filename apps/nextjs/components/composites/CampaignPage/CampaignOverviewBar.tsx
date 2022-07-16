import * as React from "react";
import {
  Background,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Grid,
  GridItem,
  Tag,
  Text,
  useTheme,
} from "@pigpile/core";
import { FaShareAlt as FaShare } from "react-icons/fa";
import { extendThemedComponent } from "../../../hocs";

// Extending gives the ability for the new component to have its own defaults (colorScheme, size, variants) set in the theme
export const BackgroundContent = extendThemedComponent("BackgroundContent", {
  Background,
});

export const CampaignOverviewBar = ({
  overview,
  location,
  tags = [],
  ...containerProps
}) => {
  const theme = useTheme();
  return (
    <BackgroundContent py={{ base: "4", lg: "10" }} {...containerProps}>
      <Container>
        <Grid
          // h='400px'
          templateRows={{ base: "6fr 1fr", md: "5fr 2fr", xl: "6fr 2fr" }}
          templateColumns={{ md: "3fr 2fr", xl: "repeat(2, 1fr)" }}
          gap={8}
        >
          <GridItem rowSpan={{ base: 2, md: 1, xl: 1 }} colSpan={1}>
            <Box flex="6">
              <HStack mt="2" mb="8" spacing="0">
                {tags.map((t) => (
                  <Tag key={t}>#{t}</Tag>
                ))}
              </HStack>
              <Box>
                <Heading fontSize="3xl" fontWeight="semibold">
                  Pigpile on cold feet in {location}
                </Heading>
                <Text fontSize="2xl" noOfLines={5}>
                  {overview}
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            m={{ base: 0, md: "64px 0", lg: 0 }}
            rowSpan={{ base: 1, xl: 2 }}
            colSpan={{ base: 2, md: 1 }}
          >
            {/*<Image _dark={{ opacity: .8, border: '8px solid rgba(255, 255, 255, 0.2)' }} minH="100%" bg="rgba(0, 0, 0, 0.06)" w="100%" h={{ base: '100%', xl: 'auto' }} objectFit="cover" border="8px solid rgba(0, 0, 0, 0.06)" src={image} />*/}
            <Box border="8px solid rgba(0, 0, 0, 0.09)">
              <Box
                className="wistia_responsive_padding"
                padding="56.25% 0 0 0"
                pos="relative"
              >
                <Box
                  className="wistia_responsive_wrapper"
                  position="absolute"
                  w="100%"
                  h="100%"
                  left="0"
                  top="0"
                >
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/1wpb65qwkz?videoFoam=true&playerColor=333333"
                    title="lewis-titles Video"
                    allow="autoplay; fullscreen"
                    allowtransparency="true"
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed"
                    name="wistia_embed"
                    msallowfullscreen="true"
                    width="100%"
                    height="100%"
                  ></iframe>
                </Box>
              </Box>
              <script
                src="https://fast.wistia.net/assets/external/E-v1.js"
                async
              ></script>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 2, xl: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Button
              size="lg"
              rightIcon={<FaShare fontSize="14px" />}
              borderRadius="full"
              ml={[0, -5]}
              minW={["100%", 300]}
            >
              Share
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </BackgroundContent>
  );
};

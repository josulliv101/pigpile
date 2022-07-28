import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@josulliv101/core";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

export const CampaignComment = ({ displayName, comment, emoji }) => (
  <Box as="section">
    <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }}>
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue("gray.300", "gray.600")}
          fontSize={{ base: "3xl", md: "6xl" }}
        />
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" mt="3">
          &ldquo;{comment}&rdquo;
        </Text>
        <Quotee
          name={displayName}
          jobTitle="10 minutes ago"
          emoji={emoji}
          mt="4"
        />
      </Flex>
    </Box>
  </Box>
);

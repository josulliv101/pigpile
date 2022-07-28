import {
  Box,
  Circle,
  Fade,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@josulliv101/core";
import { relativeDays } from "@josulliv101/formatting";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

export const Comment = ({ displayName, comment, emoji, createdAtInMS }) => (
  <Box as="section">
    <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }}>
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue("gray.300", "gray.200")}
          fontSize={{ base: "3xl", md: "4xl" }}
        />
        <Fade key={createdAtInMS} in>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="medium"
            mt="3"
            color="gray.600"
            _dark={{ color: "gray.200" }}
          >
            &ldquo;{comment}&rdquo;
          </Text>
          <Quotee
            name={displayName}
            jobTitle={relativeDays(createdAtInMS)}
            emoji={emoji}
            mt="4"
          />
        </Fade>
      </Flex>
    </Box>
  </Box>
);

import { Box, Fade, Flex, Text, useColorModeValue } from "@josulliv101/core";
import { relativeDays } from "@josulliv101/formatting";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

interface Props {
  displayName: string;
  comment: string;
  emoji: string;
  createdAtInMS: number;
}

export const Comment: React.FC<Props> = ({
  displayName,
  comment,
  emoji,
  createdAtInMS,
}) => (
  <Box as="section">
    <Box
      maxW="3xl"
      mx="auto"
      px={{ base: "6", md: "8" }}
    >
      <Flex
        align="center"
        direction="column"
        textAlign="center"
      >
        <QuoteIcon
          color={useColorModeValue("gray.300", "gray.200")}
          fontSize={{ base: "3xl", md: "4xl" }}
        />
        <Fade
          key={createdAtInMS}
          in
        >
          <Text
            _dark={{ color: "gray.200" }}
            color="gray.500"
            fontSize="md"
            fontWeight="semibold"
            mt="3"
          >
            &ldquo;{comment}&rdquo;
          </Text>
          <Quotee
            createAt={relativeDays(createdAtInMS)}
            emoji={emoji}
            mt="4"
            name={displayName}
          />
        </Fade>
      </Flex>
    </Box>
  </Box>
);

import * as React from "react";
import { FaComment } from "react-icons/fa";
import {
  Avatar as AvatarBase,
  Badge,
  Box,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@josulliv101/core";
import { relativeDays } from "@josulliv101/formatting";

export interface Donation {
  name: string;
  amount: number;
  donatedAt: string;
  icon?: string;
}

export interface DonationsTableProps {
  donations: Donation[];
}

const Avatar = (props) => (
  <AvatarBase
    sx={{
      bgColor: "gray.100",
      svg: { _dark: { color: "gray.300" }, _light: { color: "gray.50" } },
    }}
    {...props}
  />
);
const EmojiIcon = ({ icon }) => (
  <Text fontSize="22px" opacity=".7">
    {icon}
  </Text>
);

export const DonationsTable: React.FC<DonationsTableProps> = ({
  donations = [],
  ...props
}) => {
  if (!donations.length) {
    return <Text>There's no donations yet. Be the first!</Text>;
  }

  return (
    <Stack
      w="full"
      divider={<StackDivider borderColor="gray.200" />}
      {...props}
    >
      {donations.map(
        ({ comment, displayName, emoji, quantity, createdAtInMS }) => (
          <HStack key={`${displayName}-${quantity}`} flexWrap="wrap">
            <Avatar size="sm" icon={<EmojiIcon icon={emoji} />} />
            <Text flex="1" fontSize="sm">
              {displayName}
            </Text>
            {comment ? (
              <HStack>
                <Badge
                  my="1"
                  pl="7"
                  position="relative"
                  whiteSpace="unset"
                  fontWeight="normal"
                  textTransform="none"
                  pr="4"
                  fontSize="xs"
                  variant="subtle"
                  noOfLines={1}
                  py="1"
                >
                  <Box color="#8d8d8d" position="absolute" left="9px" top="7px">
                    <FaComment color="inherit" fontSize=".7rem" />
                  </Box>
                  {comment}
                </Badge>
              </HStack>
            ) : null}
            <Badge
              my="1"
              py="1"
              px="2"
              fontWeight="normal"
              textTransform="none"
              variant="subtle"
            >
              {quantity} pairs of socks
            </Badge>
            <Badge
              my="1"
              py="1"
              px="2"
              fontWeight="normal"
              textTransform="none"
              variant="subtle"
            >
              {relativeDays(createdAtInMS)}
            </Badge>
          </HStack>
        )
      )}
    </Stack>
  );
};

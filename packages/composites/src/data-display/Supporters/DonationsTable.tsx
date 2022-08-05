import { FaComment } from "react-icons/fa";
import { Donation } from "@josulliv101/types";
import {
  Avatar as AvatarBase,
  Badge,
  Box,
  HStack,
  Stack,
  StackDivider,
  Text,
  HTMLChakraProps,
} from "@josulliv101/core";
import { relativeDays } from "@josulliv101/formatting";

export interface DonationsTableProps {
  donations: Donation[];
}

const Avatar = (props: HTMLChakraProps<"div">) => (
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
  getLabel,
  ...props
}) => {
  if (!donations.length) {
    return <Text>There's no donations yet. Be the first!</Text>;
  }

  return (
    <Stack
      w="full"
      divider={
        <StackDivider
          borderColor="gray.200"
          _dark={{ borderColor: "gray.600" }}
        />
      }
      {...props}
    >
      {donations.map(
        ({ comment, displayName, emoji, quantity, createdAtInMS }, index) => (
          <HStack key={`${displayName}-${quantity}-${index}`} flexWrap="wrap">
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
                  _dark={{ bgColor: "gray.500", color: "gray.200" }}
                >
                  <Box
                    color="#8d8d8d"
                    _dark={{ color: "gray.300" }}
                    position="absolute"
                    left="9px"
                    top="7px"
                  >
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
              _dark={{ bgColor: "gray.500", color: "gray.200" }}
            >
              {quantity} {getLabel(quantity)}
            </Badge>
            <Badge
              my="1"
              py="1"
              px="2"
              fontWeight="normal"
              textTransform="none"
              variant="subtle"
              _dark={{ bgColor: "gray.500", color: "gray.200" }}
            >
              {relativeDays(createdAtInMS)}
            </Badge>
          </HStack>
        )
      )}
    </Stack>
  );
};

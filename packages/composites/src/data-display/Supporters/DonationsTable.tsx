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
  <Text
    fontSize="22px"
    opacity=".7"
  >
    {icon}
  </Text>
);

export const DonationsTable: React.FC<DonationsTableProps> = ({
  donations = [],
  getLabel,
  ...props
}) => {
  if (!donations.length) {
    return <Text>There&apos;s no donations yet. Be the first!</Text>;
  }

  return (
    <Stack
      divider={
        <StackDivider
          _dark={{ borderColor: "gray.600" }}
          borderColor="gray.200"
        />
      }
      w="full"
      {...props}
    >
      {donations.map(
        ({ comment, displayName, emoji, quantity, createdAtInMS }, index) => (
          <HStack
            key={`${displayName}-${quantity}-${index}`}
            flexWrap="wrap"
          >
            <Avatar
              icon={<EmojiIcon icon={emoji} />}
              size="sm"
            />
            <Text
              flex="1"
              fontSize="sm"
            >
              {displayName}
            </Text>
            {comment ? (
              <HStack>
                <Badge
                  _dark={{ bgColor: "gray.500", color: "gray.200" }}
                  fontSize="xs"
                  fontWeight="normal"
                  my="1"
                  noOfLines={1}
                  pl="7"
                  position="relative"
                  pr="4"
                  py="1"
                  textTransform="none"
                  variant="subtle"
                  whiteSpace="unset"
                >
                  <Box
                    _dark={{ color: "gray.300" }}
                    color="#8d8d8d"
                    left="9px"
                    position="absolute"
                    top="7px"
                  >
                    <FaComment
                      color="inherit"
                      fontSize=".7rem"
                    />
                  </Box>
                  {comment}
                </Badge>
              </HStack>
            ) : null}
            <Badge
              _dark={{ bgColor: "gray.500", color: "gray.200" }}
              fontWeight="normal"
              my="1"
              px="2"
              py="1"
              textTransform="none"
              variant="subtle"
            >
              {quantity} {getLabel(quantity)}
            </Badge>
            <Badge
              _dark={{ bgColor: "gray.500", color: "gray.200" }}
              fontWeight="normal"
              my="1"
              px="2"
              py="1"
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

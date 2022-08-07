import * as React from "react";
import { FaComment } from "react-icons/fa";
import { Donation } from "@josulliv101/types";
import {
  Avatar as AvatarBase,
  AvatarBadge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardAvatar,
  CardBackground,
  CardContent,
  Tooltip,
  HTMLChakraProps,
} from "@josulliv101/core";
import { relativeDays } from "@josulliv101/formatting";

export interface DonationsGridProps {
  donations: Donation[];
  getLabel: (n: number) => string;
}

const Avatar = (props: HTMLChakraProps<"div">) => (
  <AvatarBase
    sx={{
      svg: { _dark: { color: "gray.300" }, _light: { color: "gray.200" } },
    }}
    {...props}
  />
);
const EmojiIcon = ({ icon }: HTMLChakraProps<"div">) => (
  <Text
    fontSize="44px"
    opacity=".7"
  >
    {icon}
  </Text>
);

export const DonationsGrid: React.FC<DonationsGridProps> = ({
  donations = [],
  getLabel,
  ...props
}) => {
  if (!donations.length) {
    return <Text>There&apos;s no donations yet. Be the first!</Text>;
  }

  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
      spacing="10px"
      w="full"
      {...props}
    >
      {donations.map(({ comment, displayName, emoji, quantity, createdAtInMS }, index) => (
        <Tooltip
          key={`${displayName}-${quantity}-${index}`}
          label={comment}
          placement="top"
        >
          <Card
            key={`${displayName}-${quantity}`}
            colorScheme="blue"
            size="sm"
            sx={{
              svg: { transition: "transform 300ms" },
              _hover: { svg: { transform: "scale(1.2)" } },
            }}
            variant="outline"
          >
            <CardAvatar
              as={Avatar}
              icon={<EmojiIcon icon={emoji} />}
            >
              {comment && (
                <AvatarBadge
                  borderColor="transparent"
                  bottom="auto"
                  color="#979b9e"
                  top="0"
                >
                  <Box
                    _dark={{ color: "gray.500" }}
                    _focusVisible={{
                      outline: "none",
                      boxShadow: "outline",
                      svg: {
                        transform: "scale(1.2)",
                        _focus: { border: "none" },
                      },
                    }}
                    sx={{ svg: { outline: "none" } }}
                    tabIndex={0}
                  >
                    <FaComment
                      _focus={{ outline: "none" }}
                      border="none"
                      color="inherit"
                      fontSize=".9rem"
                      tabIndex={-1}
                    />
                  </Box>
                </AvatarBadge>
              )}
            </CardAvatar>
            <CardBackground />
            <CardContent>
              <Heading
                noOfLines={1}
                size="xs"
              >
                {displayName}
              </Heading>
              <Text
                fontSize="xs"
                noOfLines={1}
              >
                {quantity} {getLabel(quantity)}
              </Text>
              <Text
                fontSize="xs"
                noOfLines={1}
              >
                {relativeDays(createdAtInMS)}
              </Text>
            </CardContent>
          </Card>
        </Tooltip>
      ))}
    </SimpleGrid>
  );
};

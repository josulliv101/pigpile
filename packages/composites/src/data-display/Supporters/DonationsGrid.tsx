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
  <Text fontSize="44px" opacity=".7">
    {icon}
  </Text>
);

export const DonationsGrid: React.FC<DonationsGridProps> = ({
  donations = [],
  getLabel,
  ...props
}) => {
  if (!donations.length) {
    return <Text>There's no donations yet. Be the first!</Text>;
  }

  return (
    <SimpleGrid
      w="full"
      columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
      spacing="10px"
      {...props}
    >
      {donations.map(
        ({ comment, displayName, emoji, quantity, createdAtInMS }, index) => (
          <Tooltip
            key={`${displayName}-${quantity}-${index}`}
            placement="top"
            label={comment}
          >
            <Card
              key={`${displayName}-${quantity}`}
              colorScheme="blue"
              variant="outline"
              size="sm"
              sx={{
                svg: { transition: "transform 300ms" },
                _hover: { svg: { transform: "scale(1.2)" } },
              }}
            >
              <CardAvatar as={Avatar} icon={<EmojiIcon icon={emoji} />}>
                {comment && (
                  <AvatarBadge
                    borderColor="transparent"
                    color="#979b9e"
                    top="0"
                    bottom="auto"
                    children={
                      <Box
                        sx={{ svg: { outline: "none" } }}
                        _focusVisible={{
                          outline: "none",
                          boxShadow: "outline",
                          svg: {
                            transform: "scale(1.2)",
                            _focus: { border: "none" },
                          },
                        }}
                        tabIndex="0"
                        _dark={{ color: "gray.500" }}
                      >
                        <FaComment
                          _focus={{ outline: "none" }}
                          tabIndex="-1"
                          border="none"
                          color="inherit"
                          fontSize=".9rem"
                        />
                      </Box>
                    }
                  />
                )}
              </CardAvatar>
              <CardBackground />
              <CardContent>
                <Heading size="xs" noOfLines={1}>
                  {displayName}
                </Heading>
                <Text fontSize="xs" noOfLines={1}>
                  {quantity} {getLabel(quantity)}
                </Text>
                <Text fontSize="xs" noOfLines={1}>
                  {relativeDays(createdAtInMS)}
                </Text>
              </CardContent>
            </Card>
          </Tooltip>
        )
      )}
    </SimpleGrid>
  );
};

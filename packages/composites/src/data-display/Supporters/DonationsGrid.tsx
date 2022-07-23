import * as React from "react";
import { Donation } from "@josulliv101/type";
import {
  Avatar as AvatarBase,
  Badge,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardAvatar,
  CardBackground,
  CardBadge,
  CardContent,
} from "@josulliv101/core";

export interface DonationsGridProps {
  donations: Donation[];
}

const Avatar = (props) => (
  <AvatarBase
    sx={{
      svg: { _dark: { color: "gray.300" }, _light: { color: "gray.200" } },
    }}
    {...props}
  />
);
const EmojiIcon = ({ icon }) => (
  <Text fontSize="44px" opacity=".7">
    {icon}
  </Text>
);

export const DonationsGrid: React.FC<DonationsGridProps> = ({
  donations = [],
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
      {donations.map(({ displayName, emoji, quantity, createdAt }) => (
        <Card
          key={`${displayName}-${quantity}`}
          colorScheme="blue"
          variant="outline"
          size="sm"
        >
          <CardAvatar as={Avatar} icon={<EmojiIcon icon={emoji} />} />
          <CardBackground />
          <CardBadge
            as={Badge}
            textTransform="none"
            fontWeight="normal"
            fontSize="10px"
          >
            {quantity}
          </CardBadge>
          <CardContent>
            <Heading size="xs" noOfLines={1}>
              {displayName}
            </Heading>
            <Text fontSize="xs" noOfLines={1}>
              {quantity} pairs of socks
            </Text>
          </CardContent>
        </Card>
      ))}
    </SimpleGrid>
  );
};

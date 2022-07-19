import * as React from "react";
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

export interface Donation {
  name: string;
  amount: number;
  donatedAt: string;
  icon?: string;
}

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
    <SimpleGrid w="full" columns={5} spacing="10px" {...props}>
      {donations.map(({ name, icon, amount, donatedAt }) => (
        <Card
          key={`${name}-${amount}`}
          colorScheme="blue"
          variant="outline"
          size="sm"
        >
          <CardAvatar as={Avatar} icon={<EmojiIcon icon={icon} />} />
          <CardBackground />
          <CardBadge
            variant="solid"
            as={Badge}
            textTransform="none"
            fontWeight="normal"
            fontSize="10px"
          >
            {amount}
          </CardBadge>
          <CardContent>
            <Heading size="sm" noOfLines={1}>
              {name}
            </Heading>
            <Text fontSize="xs">2 pairs of socks / {donatedAt}</Text>
          </CardContent>
        </Card>
      ))}
    </SimpleGrid>
  );
};

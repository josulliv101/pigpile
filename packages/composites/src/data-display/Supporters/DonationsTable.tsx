import * as React from "react";
import {
  Avatar as AvatarBase,
  Badge,
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

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
      {donations.map(({ name, icon, amount, donatedAt }) => (
        <HStack key={`${name}-${amount}`}>
          <Avatar size="sm" icon={<EmojiIcon icon={icon} />} />
          <Text flex="1" fontSize="sm">
            {name}
          </Text>
          <Badge variant="subtle">{amount} pairs of socks</Badge>
          <Badge variant="subtle">{donatedAt}</Badge>
        </HStack>
      ))}
    </Stack>
  );
};

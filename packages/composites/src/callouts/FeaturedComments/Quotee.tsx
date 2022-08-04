import { Avatar, Box, BoxProps, Text } from "@josulliv101/core";

interface Props extends BoxProps {
  name: string;
  createAt: string;
  emoji: string;
}

export const Quotee = (props: Props) => {
  const { name, createAt, emoji, ...styleProps } = props;
  return (
    <Box {...styleProps}>
      <Avatar
        size="xl"
        bgColor="gray.200"
        opacity=".8"
        icon={
          <Box as="span" fontSize="48px">
            {emoji}
          </Box>
        }
      />
      <Box mt="3" color="gray.500" _dark={{ color: "gray.200" }}>
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm">{createAt}</Text>
      </Box>
    </Box>
  );
};

import { Avatar, Box, BoxProps, Text } from "@josulliv101/core";

interface Props extends BoxProps {
  name: string;
  createAt: string;
  emoji: string;
}

export const Quotee: React.FC<Props> = (props) => {
  const { name, createAt, emoji, ...styleProps } = props;
  return (
    <Box {...styleProps}>
      <Avatar
        bgColor="gray.200"
        icon={
          <Box
            as="span"
            fontSize="48px"
          >
            {emoji}
          </Box>
        }
        opacity=".8"
        size="xl"
      />
      <Box
        _dark={{ color: "gray.200" }}
        color="gray.500"
        mt="3"
      >
        <Text
          as="cite"
          fontStyle="normal"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text fontSize="sm">{createAt}</Text>
      </Box>
    </Box>
  );
};

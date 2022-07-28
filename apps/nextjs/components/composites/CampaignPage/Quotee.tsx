import { Avatar, Box, BoxProps, Img, Text } from "@josulliv101/core";
import * as React from "react";

interface Props extends BoxProps {
  name: string;
  jobTitle: string;
  imageSrc: string;
}

export const Quotee = (props: Props) => {
  const { name, jobTitle, emoji, ...boxProps } = props;
  return (
    <Box {...boxProps}>
      <Avatar
        size="xl"
        bgColor="gray.300"
        icon={
          <Box as="span" fontSize="48px">
            {emoji}
          </Box>
        }
      />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  );
};

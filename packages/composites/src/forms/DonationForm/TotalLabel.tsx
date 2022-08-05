import type * as React from "react";
import { Box, Divider, HStack, HTMLChakraProps, Text } from "@josulliv101/core";
import { getCurrency } from "@josulliv101/formatting";

export interface TotalLabelProps extends HTMLChakraProps<"div"> {
  amount: number;
  tip: number;
}

export const TotalLabel: React.FC<TotalLabelProps> = ({
  amount = 0,
  tip = 0,
  ...props
}) => {
  return (
    <Box my="8">
      <HStack
        alignItems="flex-end"
        justifyContent="space-between"
        {...props}
      >
        <Text
          fontSize={{ base: "md", md: "xl" }}
          alignItems="flex-end"
          display="flex"
        >
          Total: {getCurrency(amount + tip)}
        </Text>
        <Text
          opacity=".8"
          pb="2px"
          fontSize="sm"
          alignItems="flex-end"
          display="flex"
        >
          {getCurrency(amount)} donation + {getCurrency(tip)} tip
        </Text>
      </HStack>
      <Divider />
    </Box>
  );
};

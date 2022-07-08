import type * as React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  HTMLChakraProps,
  Text,
} from "@chakra-ui/react";

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
      <HStack alignItems="flex-end" justifyContent="space-between" {...props}>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          alignItems="flex-end"
          display="flex"
        >
          Total: ${amount + tip}
        </Text>
        <Text
          opacity=".8"
          pb="2px"
          fontSize="sm"
          alignItems="flex-end"
          display="flex"
        >
          ${amount} donation + ${tip} tip
        </Text>
      </HStack>
      <Divider />
    </Box>
  );
};

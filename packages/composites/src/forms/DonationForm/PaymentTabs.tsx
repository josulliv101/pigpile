import type * as React from "react";
import { HTMLChakraProps, Tab, Tabs, TabList } from "@chakra-ui/react";

export interface PaymentTabsProps extends HTMLChakraProps<"div"> {}

export const PaymentTabs: React.FC<PaymentTabsProps> = ({ ...props }) => {
  return (
    <Tabs size="sm" {...props}>
      <TabList borderSize="0" borderBottomWidth="0">
        <Tab
          borderRadius="full"
          opacity={0.6}
          _selected={{ opacity: 1, bgColor: "whiteAlpha.200" }}
        >
          Credit Card
        </Tab>
        <Tab
          borderRadius="full"
          opacity={0.6}
          _selected={{ opacity: 1, bgColor: "whiteAlphaopacity: 1, .200" }}
        >
          Paypal
        </Tab>
      </TabList>
    </Tabs>
  );
};

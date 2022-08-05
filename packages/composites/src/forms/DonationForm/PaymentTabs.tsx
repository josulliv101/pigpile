import type * as React from "react";
import { HTMLChakraProps, Tab, Tabs, TabList } from "@chakra-ui/react";

export type PaymentTabsProps = HTMLChakraProps<"div">;

export const PaymentTabs: React.FC<PaymentTabsProps> = ({ ...props }) => {
  return (
    <Tabs
      size="sm"
      {...props}
    >
      <TabList
        borderBottomWidth="0"
        borderSize="0"
      >
        <Tab
          _selected={{ opacity: 1, bgColor: "whiteAlpha.200" }}
          borderRadius="full"
          opacity={0.6}
        >
          Credit Card
        </Tab>
        <Tab
          _selected={{ opacity: 1, bgColor: "whiteAlphaopacity: 1, .200" }}
          borderRadius="full"
          opacity={0.6}
        >
          Paypal
        </Tab>
      </TabList>
    </Tabs>
  );
};

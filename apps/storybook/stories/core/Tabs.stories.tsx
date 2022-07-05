import * as React from "react";
import {
  chakra,
  Tabs,
  TabIndicator,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  VStack,
} from "@pigpile/core";

export default {
  title: "Disclosure / Tabs variant=[raised]",
  decorators: [
    (story: Function) => (
      <VStack spacing="6" alignItems="flex-start">
        {story()}
      </VStack>
    ),
  ],
};

export const Sizes = () => (
  <>
    <Tabs variant="raised" size="xs">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
    <Tabs variant="raised" size="sm">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
    <Tabs variant="raised" size="md">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
    <Tabs variant="raised" size="lg">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
  </>
);

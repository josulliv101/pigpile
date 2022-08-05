import { Tabs, TabIndicator, Tab, TabList, VStack } from "@josulliv101/core";

export default {
  title: "Disclosure / Tabs variant=[raised]",
  decorators: [
    (story) => (
      <VStack
        alignItems="flex-start"
        spacing="6"
      >
        {story()}
      </VStack>
    ),
  ],
};

export const Sizes = () => (
  <>
    <Tabs
      size="xs"
      variant="raised"
    >
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
    <Tabs
      size="sm"
      variant="raised"
    >
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
    <Tabs
      size="md"
      variant="raised"
    >
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
    <Tabs
      size="lg"
      variant="raised"
    >
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator />
    </Tabs>
  </>
);

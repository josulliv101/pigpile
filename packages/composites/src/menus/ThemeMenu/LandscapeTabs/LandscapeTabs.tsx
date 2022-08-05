import * as React from "react";
import {
  Tabs,
  TabsProps,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { TabContent } from "../TabContent";

type Option = {
  icon: JSX.Element;
  label: string;
};

const options: Option[] = [{ label: "Farm" }, { label: "Park" }];

export const LandscapeTabs = (props: TabsProps): JSX.Element => {
  return (
    <Tabs
      isManual
      mb="2"
      size="xs"
      variant="raised"
    >
      <Text
        fontSize="sm"
        mb="2"
      >
        Landscape
      </Text>
      <TabList>
        {options.map((props) => (
          <Tab key={props.label}>
            <TabContent {...props} />
          </Tab>
        ))}
      </TabList>
      <TabIndicator />
      <TabPanels>
        {options.map(({ label }) => (
          <TabPanel key={label}>
            <VisuallyHidden>{label} Landscape</VisuallyHidden>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

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
      size="xs"
      variant="raised"
      mb="2"
      isManual
    >
      <Text
        mb="2"
        fontSize="sm"
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

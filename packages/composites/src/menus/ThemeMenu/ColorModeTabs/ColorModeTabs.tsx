import * as React from "react";
import {
  HStack,
  Icon,
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
import { FaMoon, FaSun } from "react-icons/fa";
import { TabContent } from "../TabContent";

type ColorModeOption = {
  icon: JSX.Element;
  label: string;
};

const options: ColorModeOption[] = [
  { icon: FaSun, label: "Light" },
  { icon: FaMoon, label: "Dark" },
];

/*const ColorModeTab = ({ icon, label, ...props}) => {
  return (
    <Tab>
      <HStack spacing=".4rem" align="center">
        <Icon as={icon} fontSize="xs" />
        <Text>{label}</Text>
      </HStack>
    </Tab>
  );
}*/

export const ColorModeTabs = (props: TabsProps): JSX.Element => {
  console.log("ColorModeTabs", props);
  return (
    <Tabs size="xs" isManual variant="raised" mb="2" {...props}>
      <Text mb="2" fontSize="sm">
        Color Mode
      </Text>
      <TabList>
        {options.map((option) => (
          <Tab key={option.label}>
            <TabContent {...option} />
          </Tab>
        ))}
      </TabList>
      <TabIndicator />
      <TabPanels>
        {options.map(({ label }) => (
          <TabPanel key={label}>
            <VisuallyHidden>{label} Color Mode</VisuallyHidden>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

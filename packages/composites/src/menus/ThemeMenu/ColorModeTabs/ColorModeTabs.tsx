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

export const ColorModeTabs = (props: TabsProps): JSX.Element => {
  return (
    <Tabs
      isManual
      mb="2"
      size="xs"
      variant="raised"
      {...props}
    >
      <Text
        fontSize="sm"
        mb="2"
      >
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

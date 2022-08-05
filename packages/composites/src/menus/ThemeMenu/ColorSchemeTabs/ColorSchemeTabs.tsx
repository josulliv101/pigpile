import {
  Tabs,
  TabsProps,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ColorSchemeMap } from "@josulliv101/theme";
import { TabContent } from "../TabContent";

export interface ColorSchemeTabsProps extends TabsProps {
  activeColorSchemeId: string;
  colorSchemes: ColorSchemeMap;
}

export const ColorSchemeTabs = (props): JSX.Element => {
  const { colorSchemes, ...tabsProps } = props;
  return (
    <Tabs size="xs" isManual variant="raised" mb="2" {...tabsProps}>
      <Text mb="2" fontSize="sm">
        Color Scheme
      </Text>
      <TabList>
        {Object.entries(colorSchemes).map(([key, colorScheme], index) => {
          const isActive = tabsProps.index === index;
          console.log("colorScheme", key, colorScheme, isActive);
          return (
            <Tab key={key} mx="2" p="2px">
              <TabContent isActive={isActive} {...colorScheme.swatch} />
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {Object.entries(colorSchemes).map(([key, colorScheme], index) => {
          const isActive = tabsProps.index === index;
          console.log("colorScheme panels", key, colorScheme, isActive);
          return (
            <TabPanel key={key}>
              <VisuallyHidden>
                {isActive ? `${key} is active swatch` : ""}
              </VisuallyHidden>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

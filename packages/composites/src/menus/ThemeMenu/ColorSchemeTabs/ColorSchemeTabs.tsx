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
    <Tabs
      isManual
      mb="2"
      size="xs"
      variant="raised"
      {...tabsProps}
    >
      <Text
        fontSize="sm"
        mb="2"
      >
        Color Scheme
      </Text>
      <TabList>
        {Object.entries(colorSchemes).map(([key, colorScheme], index) => {
          const isActive = tabsProps.index === index;
          return (
            <Tab
              key={key}
              mx="2"
              p="2px"
            >
              <TabContent
                isActive={isActive}
                {...colorScheme.swatch}
              />
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {Object.keys(colorSchemes).map((key, index) => {
          const isActive = tabsProps.index === index;
          return (
            <TabPanel key={key}>
              <VisuallyHidden>{isActive ? `${key} is active swatch` : ""}</VisuallyHidden>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

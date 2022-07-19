import * as React from "react";
import {
  BoxProps,
  HStack,
  Icon,
  Tabs,
  TabsProps,
  UseTabProps,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Text,
  VisuallyHidden,
  SwatchProps,
} from "@josulliv101/core";
import { TabContent } from "./TabContent";

type Option = {
  label: string;
  icon?: JSX.Element;
  swatch?: SwatchProps;
  isActive?: boolean;
};
export type OptionMap = Record<string, Option>;

export interface TabsProps extends BoxProps {
  label: string;
  includeTabIndicator?: boolean;
  options: OptionMap;
}

const HiddenPanel = ({ children }) => (
  <TabPanel>
    <VisuallyHidden>{children}</VisuallyHidden>
  </TabPanel>
);

const TAB_STYLE_SWATCH = {
  mx: 1,
  maxWidth: "36px",
  _focus: { boxShadow: "none", "&>div": { boxShadow: "outline" } },
};

const ThemeTabs_ = (props: TabContentProps): JSX.Element => {
  const {
    id,
    includeTabIndicator = true,
    label,
    options = {},
    index: activeIndex,
    onChange,
    ...tabsProps
  } = props;

  const [tabItems, panelItems] = React.useMemo(() => {
    return Object.entries(options).reduce(
      ([tabs, panels], [key, option], index) => {
        const isActive = activeIndex === index;
        return [
          [
            ...tabs,
            <Tab key={key} sx={option.swatch ? TAB_STYLE_SWATCH : undefined}>
              <TabContent isActive={isActive} {...option} />
            </Tab>,
          ],
          [
            ...panels,
            <HiddenPanel key={key}>
              {isActive ? `${key} ${label}` : ""}
            </HiddenPanel>,
          ],
        ];
      },
      [[], []]
    );
  }, [activeIndex, options]);

  return (
    <Tabs
      size="xs"
      isManual
      variant="raised"
      mb="5"
      index={activeIndex}
      onChange={(index) => onChange(id, index)}
      {...tabsProps}
    >
      <Text mb="1" fontSize="sm">
        {label}
      </Text>
      <TabList>
        {tabItems}
        {panelItems}
      </TabList>
      {includeTabIndicator && <TabIndicator />}
    </Tabs>
  );
};

export const ThemeTabs = React.memo(ThemeTabs_);

import * as React from "react";
import { BoxProps, HStack, Icon, Text, SwatchAnimated, SwatchProps } from "@josulliv101/core";

export interface TabContentProps extends BoxProps {
  label: string;
  icon?: JSX.Element;
  swatch?: SwatchProps;
  isActive?: boolean;
  includeTabIndicator?: boolean;
  index: number;
}

const TabContent_ = (props: TabContentProps): JSX.Element => {
  const { icon, label, swatch, isActive } = props;
  if (swatch) {
    return (
      <SwatchAnimated
        variant="round-curved"
        {...swatch}
        isActive={isActive}
      />
    );
  }
  if (icon) {
    return (
      <HStack
        align="center"
        spacing=".4rem"
      >
        <Icon
          as={icon}
          fontSize="xs"
        />
        {label && <Text>{label}</Text>}
      </HStack>
    );
  }
  return <Text>{label}</Text>;
};

export const TabContent = React.memo(TabContent_);

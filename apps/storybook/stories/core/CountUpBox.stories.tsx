import * as React from "react";
import { CountUpBox, Progress, VStack } from "@josulliv101/core";

export default {
  title: "Data Display / CountUpBox",
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

const props = {
  countUpValue: 894,
  label: "894 of 1K",
};

export const Basic = () => <CountUpBox {...props} />;

export const LongLabel = () => (
  <CountUpBox
    {...props}
    label="894 of 1K (testing really long label)"
  />
);

export const Sizes = () => (
  <>
    <CountUpBox
      {...props}
      size="sm"
    />
    <CountUpBox
      {...props}
      size="md"
    />
    <CountUpBox
      {...props}
      size="lg"
    />
  </>
);

export const ColorSchemes = (
  args,
  {
    parameters: {
      chakra: { colorSchemes },
    },
  }
) =>
  colorSchemes.map((color) => (
    <CountUpBox
      key={color}
      {...props}
      colorScheme={color}
    />
  ));

export const DelayShowingLabel = () => (
  <CountUpBox
    {...props}
    showLabelOnEnd
  />
);

export const WithProgressBarAndLabelDelay = () => (
  <CountUpBox
    {...props}
    showLabelOnEnd
  >
    <Progress
      h="4px"
      pos="relative"
      top="10px"
      value={80}
      w="full"
    />
  </CountUpBox>
);

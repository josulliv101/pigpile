import * as React from "react";
import { Progress, VStack } from "@chakra-ui/react";
import { CountUpBox } from "@pigpile/core";

export default {
  title: "Data Display / CountUpBox",
  decorators: [
    (story: Function) => (
      <VStack spacing="6" alignItems="flex-start">
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
  <CountUpBox {...props} label="894 of 1K (testing really long label)" />
);

export const Sizes = () => (
  <>
    <CountUpBox {...props} size="sm" />
    <CountUpBox {...props} size="md" />
    <CountUpBox {...props} size="lg" />
  </>
);

export const ColorSchemes = (
  args,
  {
    parameters: {
      chakra: { colorSchemes },
    },
  }
) => colorSchemes.map((color) => <CountUpBox {...props} colorScheme={color} />);

export const DelayShowingLabel = () => <CountUpBox {...props} showLabelOnEnd />;

export const WithProgressBarAndLabelDelay = () => (
  <CountUpBox {...props} showLabelOnEnd>
    <Progress pos="relative" top="10px" w="full" h="4px" value={80} />
  </CountUpBox>
);

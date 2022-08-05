import * as React from "react";
import { Progress, VStack } from "@josulliv101/core";

export default {
  title: "Feedback / Progress",
  decorators: [
    (story: Function) => (
      <VStack
        alignItems="flex-start"
        spacing="6"
      >
        {story()}
      </VStack>
    ),
  ],
};

export const WithSlideAnimation = () => (
  <Progress
    value="50"
    w="200px"
  />
);

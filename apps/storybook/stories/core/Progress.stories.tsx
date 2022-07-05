import * as React from "react";
import { Progress, VStack } from "@chakra-ui/react";

export default {
  title: "Feedback / Progress",
  decorators: [
    (story: Function) => (
      <VStack spacing="6" alignItems="flex-start">
        {story()}
      </VStack>
    ),
  ],
};

export const WithSlideAnimation = () => <Progress value="50" w="200px" />;

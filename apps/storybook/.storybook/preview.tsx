import theme from "@pigpile/theme";
import { Box } from "@pigpile/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  /*  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#f8f8f8" },
      { name: "dark", value: "#333" },
    ],
  },*/
  chakra: {
    theme,
    colorSchemes: [
      "gray",
      "blue",
      "pink",
      "purple",
      "orange",
      "red",
      "green",
      "yellow",
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySort: {
    method: "alphabetical",
    order: [
      "Components",
      ["Data Display", "Disclosure", "Feedback", "Layout", "Media and Icons"],
      "*",
    ],
  },
};

export const decorators = [
  (Story) => (
    <Box p="40">
      <Story />
    </Box>
  ),
];

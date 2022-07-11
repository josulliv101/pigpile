import { theme } from "@pigpile/theme";
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
  // layout: 'centered',
  padded: false,
};

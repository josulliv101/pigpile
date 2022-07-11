import { RouterContext } from "next/dist/shared/lib/router-context";
import {
  theme,
  getThemeWithDefaults,
  colorSchemes,
  userThemes,
} from "@pigpile/theme";
import { Box } from "@pigpile/core";

console.log(
  "colorSchemes, userThemes",
  getThemeWithDefaults(
    colorSchemes.colorSchemeBluePink,
    userThemes.farmUserTheme
  )
);

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
    theme: getThemeWithDefaults(
      colorSchemes.colorSchemeBluePink,
      userThemes.farmUserTheme
    ),
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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

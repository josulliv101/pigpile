import { RouterContext } from "next/dist/shared/lib/router-context";
import {
  theme,
  getThemeWithDefaults,
  colorSchemes,
  userThemes,
} from "@josulliv101/theme";
import { Box } from "@josulliv101/core";

console.log(
  "colorSchemes, userThemes",
  getThemeWithDefaults(
    colorSchemes.colorSchemeBluePink,
    userThemes.farmUserTheme
  )
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
  padded: false,
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

import { ColorScheme } from "../types";

export const colorSchemePurpleGray: ColorScheme = {
  id: "purple-gray",
  swatch: {
    color1: "purple.500",
    color2: "green.500",
  },
  componentsByColorScheme: [
    {
      colorScheme: "purple",
      components: [
        "Button",
        "Card",
        "Logo",
        "Background",
        "BackgroundBar",
        "BackgroundLandscape",
        "Modal",
        "StickyBar",
      ],
    },
    {
      colorScheme: "green",
      components: ["AccentButton", "CardBadge"],
    },
    { colorScheme: "blackAlpha", components: ["NavButton"] },
    { colorScheme: "yellow", components: [] },
    { colorScheme: "gray", components: ["Progress"] },
  ],
};

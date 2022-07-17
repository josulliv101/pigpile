import { ColorScheme } from "../types";

export const colorSchemePurpleGray: ColorScheme = {
  id: "purple-gray",
  swatch: {
    color1: "purple.500",
    color2: "gray.400",
  },
  componentsByColorScheme: [
    {
      colorScheme: "purple",
      components: [
        "Background",
        "Button",
        "Card",
        "Logo",
        "BackgroundBar",
        "BackgroundLandscape",
        "Modal",
        "StickyBar",
      ],
    },
    {
      colorScheme: "gray",
      components: ["ActionButton", "CardBadge"],
    },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
    { colorScheme: "yellow", components: ["BackgroundContent"] },
  ],
};

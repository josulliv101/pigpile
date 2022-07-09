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
        "Button",
        "BackgroundContent",
        "Logo",
        "Card",
        "BackgroundBar",
        "BackgroundLandscape",
        "CardBadge",
      ],
    },
    { colorScheme: "gray", components: ["ShareButtonFoo"] },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
    { colorScheme: "blackAlpha", components: ["BackgroundExtended"] },
  ],
};

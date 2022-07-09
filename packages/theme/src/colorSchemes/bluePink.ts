import { ColorScheme } from "../types";

export const colorSchemeBluePink: ColorScheme = {
  id: "blue-pink",
  swatch: {
    color1: "blue.500",
    color2: "pink.400",
  },
  componentsByColorScheme: [
    {
      colorScheme: "blue",
      components: [
        "Background",
        "Button",
        "Card",
        "Logo",
        "BackgroundBar",
        "BackgroundLandscape",
      ],
    },
    { colorScheme: "pink", components: ["ActionButton", "CardBadge"] },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
    { colorScheme: "yellow", components: ["BackgroundContent"] },
  ],
};
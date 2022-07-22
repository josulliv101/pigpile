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
        // "Badge",
        "Button",
        "Card",
        "Logo",
        "BackgroundBar",
        "BackgroundLandscape",
        "Modal",
        "StickyBar",
        "Tag",
      ],
    },
    {
      colorScheme: "pink",
      components: ["ActionButton", "CardBadge"],
    },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
    { colorScheme: "yellow", components: ["BackgroundContent"] },
    { colorScheme: "blackAlpha", components: ["Badge"] },
  ],
};

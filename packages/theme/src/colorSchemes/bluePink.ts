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
        "Avatar",
        "Background",
        "Button",
        "Card",
        "Logo",
        "BackgroundLandscape",
        "Modal",
        "Progress",
        "StickyBar",
        "Tag",
      ],
    },
    {
      colorScheme: "pink",
      components: ["AccentButton", "CardAvatar", "CardBadge"],
    },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
    { colorScheme: "yellow", components: ["BackgroundContent"] },
    { colorScheme: "blackAlpha", components: ["Badge"] },
  ],
};

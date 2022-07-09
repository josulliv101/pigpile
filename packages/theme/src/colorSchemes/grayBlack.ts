import { ColorScheme } from "../types";

export const colorSchemeGrayBlack: ColorScheme = {
  id: "gray-black",
  swatch: {
    color1: "gray.400",
    color2: "black",
    color3: "red",
  },
  componentsByColorScheme: [
    { colorScheme: "gray", components: ["Background", "ShareButtonFoo"] },
    { colorScheme: "red", components: ["Button", "Card", "CardBadge"] },
    { colorScheme: "blue", components: ["Logo"] },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
  ],
};

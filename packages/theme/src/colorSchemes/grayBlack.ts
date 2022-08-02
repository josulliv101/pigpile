import { ColorScheme } from "../types";

export const colorSchemeGrayBlack: ColorScheme = {
  id: "gray-black",
  swatch: {
    color1: "gray.400",
    color2: "black",
    color3: "red",
  },
  componentsByColorScheme: [
    { colorScheme: "gray", components: ["Background"] },
    { colorScheme: "red", components: ["AccentButton", "Button", "Card", "CardBadge"] },
    { colorScheme: "gray", components: ["Progress"] },
    { colorScheme: "black", components: ["Logo"] },
    { colorScheme: "blue", components: ["BackgroundContent"] },
  ],
};

import { ColorScheme } from "../types";

export const colorSchemePinkBlue: ColorScheme = {
  id: "pink-blue",
  swatch: {
    color1: "pink.500",
    color2: "blue.500",
  },
  componentsByColorScheme: [
    {
      colorScheme: "pink",
      components: ["Button", "Card", "Background", "Logo"],
    },
    { colorScheme: "blue", components: ["BackgroundBar", "CardBadge"] },
    { colorScheme: "pink", components: ["Tag"] },
    { colorScheme: "blue", components: ["ShareButtonFoo"] },
    { colorScheme: "yellow", components: ["BackgroundExtended"] },
    { colorScheme: "whiteAlpha", components: ["NavButton"] },
  ],
};

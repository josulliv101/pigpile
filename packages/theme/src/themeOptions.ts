import * as colorSchemes from "./colorSchemes";
import * as userThemes from "./userThemes";
import { ChesterAnimations, ColorModes } from "./types";

export function capitalizeFirstLetter(s) {
  if (typeof s !== "string" || !s) {
    return s;
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function convertObjectToOptions(
  obj,
  { capitalizeFirst } = { capitalizeFirst: true }
) {
  return Object.values(obj).map((id) => ({
    id,
    label: capitalizeFirst ? capitalizeFirstLetter(id) : id,
  }));
}

export const themeOptions = {
  colorScheme: {
    index: 0,
    label: "Color Scheme",
    options: Object.entries(colorSchemes).map(([key, { swatch }]) => ({
      id: key,
      swatch,
    })),
    includeTabIndicator: false,
  },
  colorMode: {
    index: 0,
    label: "Color Mode",
    options: convertObjectToOptions(ColorModes), // .map(item => ({ ...item, icon: colorModeIconMap[item.id] }))
  },
  userTheme: {
    index: 0,
    label: "Theme",
    options: Object.entries(userThemes).map(([key, { label }]) => ({
      id: key,
      label,
    })),
  },
  chesterAnimation: {
    index: 0,
    label: "Chester's animation",
    options: convertObjectToOptions(ChesterAnimations),
  },
};

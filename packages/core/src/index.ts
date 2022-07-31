import { extendThemedComponent } from "./extendThemedComponent";
import { Background } from "./Background";

export * from "@chakra-ui/react";
export * from "@chakra-ui/anatomy";
export {
  anatomy,
  lighten,
  darken,
  getColor,
  mode,
  transparentize,
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
  Styles,
} from "@chakra-ui/theme-tools";
export { useColorModeValue } from "@chakra-ui/color-mode";
export { cx, memoizedGet, mergeWith } from "@chakra-ui/utils";

export { forwardRef } from "@chakra-ui/system";
export * from "./Background";
export * from "./Callout";
export * from "./Card";
export * from "./Chester";
export * from "./CountUpBox";
export * from "./Logo";
export * from "./Swatch";

// Extending gives the ability for the new component to have its own defaults (colorScheme, size, variants) set in the theme
// Any default not set will inherit the that of the parent component.
export const BackgroundContent = extendThemedComponent("BackgroundContent", {
  Background,
});

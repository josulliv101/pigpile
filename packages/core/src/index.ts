import { Button } from "@chakra-ui/react";
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

export const AccentButton: typeof Button = extendThemedComponent("AccentButton", {
  Button,
});

export const BackgroundContent: typeof Background = extendThemedComponent("BackgroundContent", {
  Background,
});

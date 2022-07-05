import * as React from "react";
import {
  chakra,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "@chakra-ui/system";
import { cx } from "@chakra-ui/utils";

export interface BackgroundProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"Container"> {}

export const Background = forwardRef<BackgroundProps, "div">((props, ref) => {
  const { className, bgImage, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig("Background", props);
  return (
    <chakra.div
      ref={ref}
      className={cx("chakra-background", className)}
      {...rest}
      __css={{
        ...styles,
      }}
    />
  );
});

Background.displayName = "Background";

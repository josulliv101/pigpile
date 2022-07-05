import * as React from "react";
import {
  chakra,
  cx,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "../";

export interface BackgroundMediaProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"Container"> {}

export const Background = forwardRef<BackgroundMediaProps, "div">(
  (props, ref) => {
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
  }
);

Background.displayName = "Background";

import {
  chakra,
  forwardRef,
  omitThemingProps,
  useStyleConfig,
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import { BackgroundMediaProps } from "./Background";

export const StickyBar = forwardRef<BackgroundMediaProps, "div">(
  (props, ref) => {
    const { className, ...rest } = omitThemingProps(props);
    const styles = useStyleConfig("StickyBar", props);
    return (
      <chakra.div
        ref={ref}
        className={cx("chakra-sticky-bar", className)}
        {...rest}
        __css={{
          ...styles,
        }}
      />
    );
  }
);

StickyBar.displayName = "StickyBar";

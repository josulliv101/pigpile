import { chakra, cx, forwardRef, omitThemingProps, useStyleConfig } from "../";
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

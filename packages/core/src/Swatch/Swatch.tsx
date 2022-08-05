import * as React from "react";
import { FaCheck } from "react-icons/fa";
import { motion, HTMLMotionProps } from "framer-motion";
import {
  Button,
  ButtonProps,
  Icon,
  Square,
  SquareProps,
  SystemStyleObject,
  useMultiStyleConfig,
  chakra,
  forwardRef,
  omitThemingProps,
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import getColorNames from "./getColorNames";

export const FooButton = () => <Button>my foo btn</Button>;

const ColorLayer = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "100%",
    pos: "absolute",
  },
});

export interface SwatchProps extends SquareProps {
  activeIcon?: React.ReactElement;
  isActive?: boolean;
  isButton?: boolean;
  color1: string;
  color2?: string;
  color3?: string;
}

export const Swatch = forwardRef<SwatchProps, "div">((props, ref) => {
  const {
    activeIcon,
    className,
    bgColor: bgColorProp,
    color1 = "white",
    color2,
    color3,
    isActive,
    isButton,
    sx = {},
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Swatch", props);
  const bgColor = color1 || bgColorProp;
  const psedoStyles = { bgColor };
  const swatchStyles: SystemStyleObject = {
    bgColor,
    _hover: psedoStyles,
    _active: psedoStyles,
    ...styles.container,
  };
  const label =
    props["aria-label"] ||
    `swatch colors ${getColorNames(color1, color2, color3)}`;
  return (
    <Square
      role={!isButton ? "img" : undefined}
      aria-label={label}
      ref={ref}
      className={cx("chakra-swatch", className)}
      sx={{
        ...swatchStyles,
        ...sx,
      }}
      {...rest}
    >
      {color2 && (
        <ColorLayer
          bgColor={color2}
          sx={{ ...styles.color2 }}
        />
      )}
      {color3 && (
        <ColorLayer
          bgColor={color3}
          sx={{ ...styles.color3 }}
        />
      )}
      {isActive && (
        <Icon
          as={activeIcon || FaCheck}
          sx={styles.icon}
        />
      )}
    </Square>
  );
});

Swatch.displayName = "Swatch";

type OmittedProps =
  | "leftIcon"
  | "isFullWidth"
  | "rightIcon"
  | "loadingText"
  | "iconSpacing"
  | "spinnerPlacement";

type BaseButtonProps = Omit<ButtonProps, OmittedProps>;

export type SwatchButtonProps = BaseButtonProps &
  SwatchProps &
  HTMLMotionProps<"button">;

export const SwatchButton_ = forwardRef<SwatchButtonProps, "button">(
  ({ sx, ...props }, ref) => (
    <Swatch
      as={Button}
      ref={ref}
      sx={{
        minW: 0,
        padding: 0,
        ...sx,
      }}
      {...props}
      isButton
    />
  )
);

const MotionSwatch = motion<SwatchButtonProps>(Swatch);

export const SwatchAnimated: React.FC<SwatchButtonProps> = (props) => (
  <MotionSwatch
    whileHover={{
      scale: [null, 1.05, 1],
      transition: { duration: 0.2 },
    }}
    transformTemplate={(_, transform) =>
      // Disable GPU acceleration to prevent blurriness
      transform.replace(" translateZ(0)", "")
    }
    transformOrigin="center"
    {...props}
  />
);

const MotionSwatchButton = motion<SwatchButtonProps>(SwatchButton_);

export const SwatchButton: React.FC<SwatchButtonProps> = (props) => (
  <MotionSwatchButton
    whileHover={{
      scale: [null, 1.2, 1],
      transition: { duration: 0.2 },
    }}
    transformTemplate={(_, transform) =>
      // Disable GPU acceleration to prevent blurriness
      transform.replace(" translateZ(0)", "")
    }
    transformOrigin="center"
    {...props}
  />
);

SwatchButton.displayName = "SwatchButton";

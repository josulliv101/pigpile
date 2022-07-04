import {
  anatomy,
  PartsStyleFunction,
  PartsStyleObject,
} from "@chakra-ui/theme-tools";

const parts = anatomy("swatch").parts("container", "color2", "icon");

const baseStyle: PartsStyleObject = {
  container: {
    borderRadius: 0,
    boxShadow: "outline-offset",
    color: "white",
    fontSize: ".8rem",
    overflow: "hidden",
    position: "relative",
    svg: {
      position: "relative",
    },
  },
  color2: {
    top: "-54%",
    left: "50%",
    transform: "scale(1.25) rotate(45deg)",
  },
  color3: {
    top: "70%",
    left: "50%",
    transform: "rotate(45deg)",
  },
  icon: {},
};

const variantRound: PartsStyleObject = {
  container: { borderRadius: "full" },
  color3: { top: "58%" },
};

const variantRoundCurved: PartsStyleFunction<typeof parts> = (props) => {
  return {
    container: { borderRadius: "full" },
    color2: {
      borderRadius: "full",
      left: "46%",
      top: "0%",
      transform: `scale(1.0) rotate(0deg)`,
    },
    color3: {
      bgColor: "transparent",
      borderColor: props.color3,
      borderWidth: "3px",
      borderRadius: "full",
      left: "46%",
      top: "0%",
      transform: `scale(1.0) rotate(0deg)`,
    },
  };
};

const variants = {
  round: variantRound,
  "round-curved": variantRoundCurved,
};

const defaultProps = {
  size: "sm",
};

const sizes = {
  sm: {
    container: {
      boxSize: 6,
    },
  },
  md: {
    container: {
      boxSize: 8,
    },
  },
  lg: {
    container: {
      boxSize: 10,
    },
  },
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

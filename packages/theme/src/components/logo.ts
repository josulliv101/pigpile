import { getColor, mode, SystemStyleFunction } from "@josulliv101/core";

const baseStyle: SystemStyleFunction = (props) => {
  const { colorScheme, theme } = props;
  const bgColor = mode(
    props.bgColor ?? "white",
    colorScheme ? `${colorScheme}.200` : "gray.700"
  )(props);

  const fill = mode(
    colorScheme ? `${colorScheme}.500` : "black",
    getColor(theme, "gray.800", "gray")
  )(props);

  return {
    bgColor,
    borderColor: bgColor,
    fill,
    transform: "translateZ(0)",
    transition: "transform 200ms ease-in-out 400ms",
  };
};

export default {
  baseStyle,
};

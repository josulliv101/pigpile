import { mode, SystemStyleFunction } from "@josulliv101/core";

const baseStyle: SystemStyleFunction = (props) => {
  const { colorScheme = "gray" } = props;
  const bgColor = mode(
    props.bgColor ?? `${colorScheme}.500`,
    `${colorScheme}.700`
  )(props);
  return {
    bgColor,
    shadow: "lg",
    h: "20px",
    pos: "sticky",
    zIndex: "sticky",
    top: { base: "40px", md: "38px" },
  };
};

export default {
  baseStyle,
};

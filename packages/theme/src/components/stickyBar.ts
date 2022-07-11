import { mode, SystemStyleFunction } from "@pigpile/core";

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
    top: { base: "32px", md: "38px" },
  };
};

export default {
  baseStyle,
};

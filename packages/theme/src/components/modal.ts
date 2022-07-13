import { mode, SystemStyleFunction, transparentize } from "@pigpile/core";

const baseStyle: SystemStyleFunction = (props) => {
  const { colorScheme = "gray" } = props;
  const bgColor = mode(
    props.bgColor ?? `${colorScheme}.600`,
    `${colorScheme}.700`
  )(props);

  const color = mode(props.color ?? "white", `${colorScheme}.100`)(props);
  const gradientColor1 = transparentize(`${colorScheme}.600`, 0.8)(props.theme);
  const gradientColor2 = transparentize(
    `${colorScheme}.500`,
    0.98
  )(props.theme);

  return {
    dialog: {
      bgColor,
      color,
      _after: {
        zIndex: -1,
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "100%",
        bg: `gray.900`,
        opacity: "0.9",
        bgImage: `linear-gradient(180deg,${gradientColor2},${gradientColor1})`,
      },
    },
  };
};

export default {
  baseStyle,
};
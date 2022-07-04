import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleFunction = (props) => {
  const { colorScheme = 'gray'  } = props;
  const bgColor = mode(
    props.bgColor ?? `${colorScheme}.600`,
    `${colorScheme}.700`
  )(props);

  const color = mode(
    props.color ?? "white",
    `${colorScheme}.100`
  )(props);

  return {
    bgColor,
    color,
  };
};

export default {
  baseStyle,
};

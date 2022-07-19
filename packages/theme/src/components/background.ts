import {
  getColor,
  mode,
  SystemStyleFunction,
  useColorModeValue,
} from "@josulliv101/core";

const baseStyle: SystemStyleFunction = (props) => {
  const { bgColor, bgImage, colorScheme = "gray" } = props;
  const styles = {
    width: "full",
    position: "relative",
    bgImage,
    bgSize: "cover",
    bgPosition: "center",
    ...(!bgColor &&
      colorScheme && {
        bgColor: mode(`${colorScheme}.400`, `${colorScheme}.600`)(props),
      }),
  };
  return {
    ...styles,
  };
};

const gradientVariant: SystemStyleFunction = (props) => {
  const { bgImage, colorScheme, theme } = props;
  const colorValues = colorScheme === "pink" ? [300, 500] : [400, 600];
  const c = mode(
    `${colorScheme}.${colorValues[0]}`,
    `${colorScheme}.${colorValues[1]}`
  )(props);
  const gradientColor = getColor(theme, c, colorScheme);
  const gradient = `linear-gradient(180deg,${gradientColor},hsla(0,0%,${useColorModeValue(
    "48%",
    "40%"
  )},${useColorModeValue(0.5, 0.6)}))`;
  const bgImages = bgImage ? [gradient, bgImage] : [gradient];
  return {
    bgImage: bgImages.join(","),
  };
};

const solidVariant: SystemStyleFunction = (props) => {
  const { bgImage, colorScheme } = props;
  if (colorScheme && !bgImage) {
    const bg = mode(`${colorScheme}.500`, `${colorScheme}.400`)(props);
    return {
      bg,
    };
  }
  return {};
};

const subtleVariant: SystemStyleFunction = (props) => {
  const { bgImage, colorScheme } = props;
  if (colorScheme && !bgImage) {
    const bg = mode(`${colorScheme}.50`, `gray.700`)(props);
    return {
      bg,
    };
  }
  return {};
};

export default {
  baseStyle,
  variants: {
    gradient: gradientVariant,
    solid: solidVariant,
    subtle: subtleVariant,
  },
};

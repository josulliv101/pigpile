import {
  mode,
  transparentize,
  SystemStyleObject,
  SystemStyleFunction,
} from "@josulliv101/core";

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.500`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {
  "2xs": {
    h: 4,
    minW: 4,
    fontSize: "2xs",
    px: 2,
  },
  "3xs": {
    h: 3,
    minW: 3,
    fontSize: "3xs",
    px: 1,
  },
};

const variants = {
  ghost: variantGhost,
};
export default {
  sizes,
  variants,
};

import {
  anatomy,
  lighten,
  mode,
  SystemStyleFunction,
  PartsStyleFunction,
} from "@pigpile/core";

export const parts = anatomy("card").parts(
  "container",
  "background",
  "badge",
  "avatar",
  "content"
);

const baseStyleBadge: SystemStyleFunction = (props) => {
  return {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    insetEnd: "0",
    top: "0",
    zIndex: 10,
    borderRadius: "full",
  };
};

const baseStyleContent: SystemStyleFunction = (props) => {
  return {
    color: mode("gray.500", "gray.200")(props),
    fontSize: "14px",
    pos: "relative",
  };
};

const baseStyleAvatar: SystemStyleFunction = (props) => {
  return {
    alignItems: "center",
    color: "white",
    display: "flex",
    justifyContent: "center",
    mx: "auto",
    mb: "12px",
    zIndex: 8,
  };
};

const baseStyleBackground: SystemStyleFunction = (props) => {
  return {
    pos: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 7,
  };
};

const baseStyleContainer: SystemStyleFunction = (props) => {
  return {
    pos: "relative",
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  background: baseStyleBackground(props),
  badge: baseStyleBadge(props),
  avatar: baseStyleAvatar(props),
  content: baseStyleContent(props),
  container: baseStyleContainer(props),
});

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c = "gray" } = props;
  return {
    background: {
      bgColor: mode(`${c}.200`, `${c}.700`)(props),
    },
    badge: {
      bgColor: mode(`gray.400`, `${c}.600`)(props),
    },
    container: {
      bgColor: mode(`${c}.100`, `${c}.500`)(props),
    },
  };
};

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme = "gray" } = props;
  const backgroundOpacity = mode(1, 0.5)(props);
  const lightenBgColorMap = {
    pink: 7,
    red: 6,
    purple: 6,
    blue: 12,
    green: 10,
    gray: 4,
    orange: 10,
    yellow: 10,
  };
  return {
    container: {
      bgColor: mode("white", "gray.500")(props),
      borderWidth: 1,
      borderColor: "gray.200",
      // h: "168px",
    },
    background: {
      bgImage: `radial-gradient(ellipse at center, rgba(244,244,244,${backgroundOpacity}) 0%,rgba(211,211,211,${backgroundOpacity}) 100%)`,
      h: "76px",
    },
    avatar: {
      bgColor: lighten(
        `${colorScheme}.${mode(`100`, `200`)(props)}`,
        mode(1, 1.25)(props) * lightenBgColorMap[colorScheme] ?? 7
      ),
      borderColor: `${colorScheme}.100`,
      borderWidth: 1,
      boxShadow: `0 0 0 4px ${mode(`white`, `gray.700`)(props)}`,
      h: "80px",
      top: "20px",
      w: "80px",
    },
    content: {
      pt: 4,
    },
  };
};

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  // avatar: baseStyleAvatar(props),
  // container: baseStyleContainer(props),
};

const sizes = {
  sm: {
    // avatar: {},
    background: {
      h: "52px",
    },
    badge: {
      fontSize: ".6rem",
      margin: 2,
      px: 1,
    },
    container: {
      minH: "40px",
      minW: "132px",
      px: 4,
      py: 3,
    },
    content: {
      fontSize: ".9rem",
      pt: 0,
    },
  },
  md: {
    background: {
      h: "70px",
    },
    badge: {
      fontSize: ".66rem",
      margin: 2,
      px: 1,
    },
    container: {
      minH: "64px",
      minW: "164px",
      px: 4,
      py: 3,
    },
    content: {
      fontSize: "1rem",
      pt: 1,
    },
  },
  lg: {
    background: {
      h: "90px",
    },
    badge: {
      fontSize: ".8rem",
      margin: 3,
      px: 1,
    },
    container: {
      minH: "80px",
      minW: "184px",
      px: 5,
      py: 4,
    },
    content: {
      fontSize: "1.2rem",
      pt: 2,
    },
  },
};

const defaultProps = {
  size: "md",
  variant: "solid",
};

export default {
  parts: parts.keys,
  baseStyle,
  defaultProps,
  sizes,
  variants,
};

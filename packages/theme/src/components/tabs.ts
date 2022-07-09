import { SystemStyleObject } from "@pigpile/core";

const raisedVariant: SystemStyleObject = {
  root: {
    width: "fit-content",
  },
  tablist: {
    py: "0.1875rem",
    px: "1",
    bg: "gray.100",
    borderRadius: "lg",
    _dark: {
      bg: "gray.600",
    },
  },
  tab: {
    color: "gray.600",
    fontWeight: "medium",
    zIndex: 1,
    _selected: {
      color: "gray.700",
    },
    _focus: {
      boxShadow: "none",
      textDecoration: "underline",
      textDecorationColor: "gray.800",
    },
    _dark: {
      color: "gray.50",
      _selected: {
        color: "gray.100",
      },
    },
  },
  indicator: {
    bg: "white",
    zIndex: "auto",
    borderRadius: "md",
    boxShadow: "base",
    transitionProperty: "top, right, left, bottom, width !important",
    _dark: {
      bg: "#2d3748",
    },
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  xs: {
    tab: {
      py: 0,
      px: 3,
      height: 8,
      fontSize: ".8rem",
    },
    indicator: {
      mt: "-34px",
      h: 8,
    },
  },
  sm: {
    tab: {
      height: 9,
    },
    indicator: {
      mt: "-39px",
      h: 9,
    },
  },
  md: {
    tab: {
      height: 9,
    },
    indicator: {
      mt: "-39px",
      h: 9,
    },
  },
  lg: {
    tab: {
      height: 9,
    },
    indicator: {
      mt: "-39px",
      h: 9,
    },
  },
};

const variants = {
  raised: raisedVariant,
};

export default {
  sizes,
  variants,
};

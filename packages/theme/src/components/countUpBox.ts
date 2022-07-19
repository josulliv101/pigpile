import { anatomy, mode, SystemStyleFunction } from "@josulliv101/core";

const parts = anatomy("countUpBox").parts("container", "countUpLabel", "label");

const baseStyle: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  const bgColor = props.bgColor || mode(`${c}.50`, `${c}.500`)(props);
  const color = mode(`${c}.500`, `${c}.100`)(props);
  return {
    container: {
      bgColor,
      borderRadius: 12,
      minW: "120px",
    },
    label: {
      color,
      lineHeight: "20px",
      pr: "40px",
    },
    countUpLabel: {
      color,
      fontWeight: "semibold",
      lineHeight: "22px",
      pos: "absolute",
      right: 0,
    },
  };
};

const defaultProps = {
  size: "md",
  colorScheme: "gray",
};

const sizes = {
  sm: {
    container: {
      // minW: 120,
      px: 4,
      py: 2,
    },
    label: {
      fontSize: "12px",
    },
    countUpLabel: {
      fontSize: "16px",
    },
  },
  md: {
    container: {
      // minW: 130,
      px: 4,
      py: 2,
    },
    label: {
      fontSize: "14px",
    },
    countUpLabel: {
      fontSize: "18px",
    },
  },
  lg: {
    container: {
      // minW: 160,
      px: 5,
      py: 3,
    },
    label: {
      fontSize: "16px",
    },
    countUpLabel: {
      fontSize: "20px",
    },
  },
};

export default {
  parts: parts.keys,
  baseStyle,
  defaultProps,
  sizes,
};

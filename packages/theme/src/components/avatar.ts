import { mode, SystemStyleFunction, transparentize } from "@josulliv101/core";

const baseStyle: SystemStyleFunction = (props) => {
  const { colorScheme = "gray" } = props;
  console.log("AvatarBadge", props);
  const bgColor = mode(
    props.bgColor ?? `${colorScheme}.500`,
    `${colorScheme}.700`
  )(props);
  return {
    badge: {
      transform: "translate(0%, 0%) !important",
      // ">svg": { color: `${bgColor} !important`, display: 'inline-block' }
    },
  };
};

export default {
  baseStyle,
};

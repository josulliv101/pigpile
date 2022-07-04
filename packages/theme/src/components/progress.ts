import {
  mode,
  PartsStyleFunction,
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { progressAnatomy as parts } from "@chakra-ui/anatomy";
import { keyframes } from "@chakra-ui/react";

const slide = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const baseStyleTrack: SystemStyleFunction = (props) => {
  return {
    bg: mode("gray.200", "whiteAlpha.300")(props),
  };
};

const baseStyleFilledTrack: SystemStyleObject = {
  animation: `${slide} 1.5s ease-out 0s normal 1 forwards running`,
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  filledTrack: baseStyleFilledTrack,
  track: baseStyleTrack(props),
});

export default {
  baseStyle,
};

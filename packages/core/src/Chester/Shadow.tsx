import * as React from "react";
import { chakra, HTMLChakraProps } from "../";

export const Shadow: React.FC<HTMLChakraProps<"div">> = (props) => (
  <chakra.div
    w="100px"
    h="10px"
    bg="radial-gradient(ellipse at 50% 50%, rgb(86 119 89) 10%, rgba(0, 0, 0, 0) 50%)"
    pos="relative"
    zIndex="-1"
    {...props}
  />
);

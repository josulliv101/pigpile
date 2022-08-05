import * as React from "react";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";

export const Shadow: React.FC<HTMLChakraProps<"div">> = (props) => (
  <chakra.div
    bg="radial-gradient(ellipse at 50% 50%, rgb(86 119 89) 10%, rgba(0, 0, 0, 0) 50%)"
    h="10px"
    pos="relative"
    w="100px"
    zIndex="-1"
    {...props}
  />
);

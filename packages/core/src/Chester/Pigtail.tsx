import { HTMLChakraProps } from "@chakra-ui/react";
import { Tail } from "../Logo";

export const Pigtail: React.FC<HTMLChakraProps<"svg">> = (props) => (
  <Tail
    boxSize={8}
    fill="#e1bdbf"
    sx={{
      position: "absolute",
      left: "47px",
      top: "21px",
      zIndex: 9,
      transform: "scale3d(.8, .8, .8)",
      transformOrigin: "bottom left",
    }}
    {...props}
  />
);

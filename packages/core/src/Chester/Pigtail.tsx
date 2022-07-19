import { HTMLChakraProps } from "@chakra-ui/react";
import { Tail } from "../Logo";

export const Pigtail: React.FC<HTMLChakraProps<"svg">> = (props) => (
  <Tail
    sx={{
      position: "absolute",
      left: "47px",
      top: "20px",
      zIndex: 9,
      transform: "scale(.8)",
      transformOrigin: "bottom left",
    }}
    fill="#e1bdbf"
    boxSize={8}
    {...props}
  />
);

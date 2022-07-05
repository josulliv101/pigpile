import * as React from "react";
import { HTMLChakraProps, Tail } from "../";

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

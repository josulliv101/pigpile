import { Background, chakra } from "@pigpile/core";

export const StickyBar = chakra(Background, {
  baseStyle: {
    shadow: "lg",
    h: "20px",
    pos: "sticky",
    zIndex: "sticky",
    top: { base: "32px", md: "38px" },
  },
});

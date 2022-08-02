import { UserTheme } from "../types";

export const funUserTheme: UserTheme = {
  id: "fun",
  label: "City Park",
  bgImage: "/city-park.png",
  chesterPosition: {
    left: "8%",
    bottom: { base: "32%", lg: "28%" },
    top: "auto",
    right: "auto",
  },
  bgPosition: "20% 80%",
  componentsByVariant: [
    { variant: "ghost", components: ["NavButtonFoo", "NavButtonGroup"] },
    { variant: "outline", components: ["Card"] },
    { variant: "solid", components: ["Badge", "Button", "Tag"] },
    { variant: "subtle", components: ["BackgroundContent"] },
  ],
  componentsBySize: [
    { size: "xl", components: [] },
    { size: "lg", components: ["Badge"] },
    { size: "md", components: ["Button", "MenuButton"] },
    { size: "sm", components: ["Avatar"] },
  ],
};

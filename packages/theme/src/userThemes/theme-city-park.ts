import { UserTheme } from "../types";

export const funUserTheme: UserTheme = {
  id: "fun",
  label: "City Park",
  bgImage: "/city-park.png",
  chesterPosition: {
    left: "39.5%",
    bottom: "12%",
    top: "auto",
    right: "auto",
  },
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
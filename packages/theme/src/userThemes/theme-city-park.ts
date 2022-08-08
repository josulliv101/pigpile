import { UserTheme } from "../types";

export const funUserTheme: UserTheme = {
  id: "city-park",
  label: "City Park",
  bgImage: "/city-park.png",
  chesterPosition: {
    left: { base: "77%", md: "68%" },
    bottom: { base: "32%", lg: "30%" },
    top: "auto",
    right: "auto",
  },
  bgPosition: { base: "50% 80%", lg: "50% 80%" },
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

import { UserTheme } from "../types";

export const farmUserTheme: UserTheme = {
  id: "farm",
  label: "Farm",
  chesterPosition: {
    left: "68%",
    bottom: "17%",
    top: "auto",
    right: "auto",
  },
  bgImage: "/on-the-farm.webp",
  bgPosition: "20% 80%",
  componentsByVariant: [
    { variant: "ghost", components: ["NavButton", "Tag"] },
    { variant: "outline", components: ["Card"] },
    {
      variant: "solid",
      components: ["Badge", "ShareButtonFoo", "BackgroundBar", "Button"],
    },
    { variant: "subtle", components: ["BackgroundContent"] },
  ],
  componentsBySize: [
    { size: "md", components: ["Button", "ShareButtonFoo"] },
    { size: "lg", components: ["CardAvatar"] },
    { size: "md", components: ["MenuButton", "Tag"] },
    { size: "sm", components: ["Avatar"] },
  ],
};

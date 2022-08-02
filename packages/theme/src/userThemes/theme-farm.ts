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
  // bgImage: "https://firebasestorage.googleapis.com/v0/b/fir-abc-a965d.appspot.com/o/stock%2Fmountains.jpg?alt=media&token=3fce726f-2830-4d8e-91ae-c786bf24788a",
  bgImage: "/on-the-farm-1200x700.png",
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

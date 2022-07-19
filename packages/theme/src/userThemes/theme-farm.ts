import { PigpileTheme } from "../types";

export const farmUserTheme: PigpileTheme = {
  id: "farm",
  label: "Farm",
  // bgImage: "https://firebasestorage.googleapis.com/v0/b/fir-abc-a965d.appspot.com/o/stock%2Fmountains.jpg?alt=media&token=3fce726f-2830-4d8e-91ae-c786bf24788a",
  bgImage: "/landscape.png",
  componentsByVariant: [
    { variant: "ghost", components: ["NavButton", "Tag"] },
    { variant: "outline", components: ["Card"] },
    {
      variant: "solid",
      components: ["ShareButtonFoo", "BackgroundBar", "Button"],
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

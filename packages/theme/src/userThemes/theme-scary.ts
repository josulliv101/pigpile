import { PigpileTheme } from "../types";

export const scaryUserTheme: PigpileTheme = {
  id: "scary",
  label: "Scary",
  bgImage:
    "https://media.istockphoto.com/vectors/river-summer-wide-panorama-landscape-illustration-cartoon-natural-vector-id1318186565",
  componentsByVariant: [
    { variant: "ghost", components: ["NavButtonFoo", "NavButtonGroup"] },
    { variant: "outline", components: ["Card"] },
    { variant: "subtle", components: ["BackgroundContent"] },
  ],
  componentsBySize: [
    { size: "xl", components: ["Button"] },
    { size: "lg", components: [] },
    { size: "md", components: ["NavButtonFoo", "MenuButton"] },
    { size: "sm", components: ["Avatar"] },
  ],
};

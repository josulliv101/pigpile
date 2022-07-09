import { PigpileTheme } from "../types";

export const funUserTheme: PigpileTheme = {
  id: "fun",
  label: "Fun",
  bgImage:
    "https://media.istockphoto.com/vectors/mountain-forest-panoramic-vector-id1162654545",
  chesterPosition: {
    left: "39.5%",
    bottom: "12%",
    top: "auto",
    right: "auto",
  },
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

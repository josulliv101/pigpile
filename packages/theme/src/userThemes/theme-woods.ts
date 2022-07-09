import { PigpileTheme } from "../types";

export const woodsUserTheme: PigpileTheme = {
  id: "woods",
  label: "Woods",
  // bgImage: "https://media.istockphoto.com/vectors/city-park-panorama-vector-id817094572",
  bgImage: "/citypark.jpg",
  chesterPosition: {
    left: "12%",
    bottom: "6%",
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

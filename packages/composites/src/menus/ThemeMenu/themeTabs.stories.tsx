import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeTabs } from "./ThemeTabs";
import { FaMoon, FaSun } from "react-icons/fa";

const meta = {
  component: ThemeTabs,
  title: "Menus / Theme / TabContent",
} as ComponentMeta<typeof ThemeTabs>;

export { meta as default };

const Template: ComponentStory<typeof ThemeTabs> = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ThemeTabs
      index={activeIndex}
      onChange={setActiveIndex}
      {...args}
    />
  );
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  label: "Labels",
  options: {
    one: {
      label: "One",
    },
    two: {
      label: "Two",
    },
  },
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Icons",
  options: {
    one: {
      label: "One",
      icon: FaMoon,
    },
    two: {
      label: "Two",
      icon: FaSun,
    },
  },
};

export const WithSwatches = Template.bind({});
WithSwatches.args = {
  label: "Swatches",
  options: {
    red: {
      label: "Red",
      swatch: { color1: "red.500" },
    },
    gray: {
      label: "Blue",
      swatch: { color1: "gray.500", color2: "gray.600" },
    },
  },
};

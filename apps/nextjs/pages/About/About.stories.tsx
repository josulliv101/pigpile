import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LayoutBasic } from "../../components/layouts";
import About from "./About";

export default {
  title: "About",
  component: LayoutBasic,
  argTypes: {},
} as ComponentMeta<typeof LayoutBasic>;

const Template: ComponentStory<typeof LayoutBasic> = (args) => {
  return (
    <LayoutBasic {...args}>
      <About />
    </LayoutBasic>
  );
};

export const Default = Template.bind({});

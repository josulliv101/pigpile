import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { LayoutFullViewport } from "../../components/layouts";
import Home from "./Home";

export default {
  title: "Home",
  component: LayoutFullViewport,
  argTypes: {},
} as ComponentMeta<typeof LayoutFullViewport>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof Home> = (args) => {
  return (
    <LayoutFullViewport {...args}>
      <Home />
    </LayoutFullViewport>
  );
};

export const Default = Template.bind({});
/*Default.play = async () => {
  const btn = screen.getByText("hello");
  await userEvent.click(btn);
};*/

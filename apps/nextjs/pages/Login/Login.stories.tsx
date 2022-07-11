import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { LayoutFullViewport } from "../../components/layouts";
import Login from "./Login";

export default {
  title: "Login",
  component: LayoutFullViewport,
  argTypes: {},
} as ComponentMeta<typeof LayoutFullViewport>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof LayoutFullViewport> = (args) => {
  return (
    <LayoutFullViewport {...args}>
      <Login />
    </LayoutFullViewport>
  );
};

export const Default = Template.bind({});
/*Default.play = async () => {
  const btn = screen.getByText("hello");
  await userEvent.click(btn);
};*/

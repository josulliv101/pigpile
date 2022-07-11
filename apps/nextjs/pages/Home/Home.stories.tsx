import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  screen,
  userEvent,
} from "@storybook/testing-library";
import Home from "./Home";

export default {
  title: "Home",
  component: Home,
  argTypes: {

  },
} as ComponentMeta<typeof Home>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof Home> = (args) => {
  return Home.getLayout(<Home {...args} />);
};

export const Default = Template.bind({});
/*Default.play = async () => {
  const btn = screen.getByText("hello");
  await userEvent.click(btn);
};*/

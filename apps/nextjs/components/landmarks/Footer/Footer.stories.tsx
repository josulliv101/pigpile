import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  screen,
  userEvent,
} from "@storybook/testing-library";
import { Box } from "@pigpile/core";
import { Footer } from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {

  },
  decorators: [
    (Story) => (
      <Box bgColor="blackAlpha.600" h="inherit">
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Footer>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});
/*Default.play = async () => {
  const btn = screen.getByText("hello");
  await userEvent.click(btn);
};*/
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { Box } from "@josulliv101/core";
import { Banner } from "./Banner";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {},
  decorators: [
    (Story) => (
      <Box bgColor="blackAlpha.600" h="inherit">
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Banner>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof Banner> = (args) => {
  return <Banner {...args} />;
};

export const Default = Template.bind({});

export const WithNav = Template.bind({});
WithNav.args = {
  children: <div style={{ color: "white" }}>my nav</div>,
};

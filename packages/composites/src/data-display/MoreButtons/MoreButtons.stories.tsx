import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  screen,
  userEvent,
  waitFor,
  fireEvent,
} from "@storybook/testing-library";
import { Box, Center } from "@josulliv101/core";
import { MoreButtons } from "./MoreButtons";
import { options, moreOptions } from "./mock";

export default {
  title: "Data Display / More Buttons",
  component: MoreButtons,
  argTypes: {
    options: {
      name: "options",
      defaultValue: options,
    },
  },
  decorators: [
    (story: Function) => (
      <Center>
        <Box maxW="536px">{story()}</Box>
      </Center>
    ),
  ],
} as ComponentMeta<typeof MoreButtons>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof MoreButtons> = (args) => {
  return <MoreButtons {...args} />;
};

const onClick = () => console.info("click");
const onCustomClick = () => console.info("custom click");

export const Basic = Template.bind({});

export const ShowAllAndBack = Template.bind({});
ShowAllAndBack.args = {
  options: [...options, ...moreOptions],
};
ShowAllAndBack.play = async () => {
  await sleep(1000);
  const btn = screen.getByLabelText("more");
  await userEvent.click(btn);
  await sleep(1000);
  const btn6Pairs = screen.getByText("back");
  await userEvent.click(btn6Pairs);
};

export const WithCustomButtonAndClick = Template.bind({});
WithCustomButtonAndClick.args = {
  options: [...options, ...moreOptions, { label: "custom", value: "custom" }],
};
WithCustomButtonAndClick.play = async () => {
  await sleep(500);
  const btn = screen.getByLabelText("more");
  await userEvent.click(btn);
  await sleep(500);
  const btn6Pairs = screen.getByText("custom");
  await userEvent.click(btn6Pairs);
};

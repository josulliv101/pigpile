import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { EmojiForm } from "./EmojiForm";

export default {
  title: "Forms/ Emoji Form",
  component: EmojiForm,
  argTypes: {},
} as ComponentMeta<typeof EmojiForm>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof EmojiForm> = (args) => {
  return <EmojiForm {...args} />;
};

export const Basic = Template.bind({});

export const FillFormAndSubmit = Template.bind({});
FillFormAndSubmit.play = async () => {
  const displayNameInput = screen.getByLabelText("displayName");
  await userEvent.type(displayNameInput, "Mr. Foobar", {
    delay: 100,
  });

  const smileEmojiBtn = screen.getByLabelText("🙂");
  await userEvent.click(smileEmojiBtn);

  const submitBtn = screen.getByText("Finish");
  await userEvent.click(submitBtn);
};

export const Anonymous = Template.bind({});
Anonymous.play = async () => {
  const checkbox = screen.getByRole("checkbox");
  await userEvent.click(checkbox);
  sleep(500);
};

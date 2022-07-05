import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { LoginForm } from "./LoginForm";

export default {
  title: "Forms/ Login Form",
  component: LoginForm,
  argTypes: { onSignInWithProvider: { action: "provider btn clicked" } },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Basic = Template.bind({});

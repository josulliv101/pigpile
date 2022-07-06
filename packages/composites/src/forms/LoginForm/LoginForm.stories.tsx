import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { LoginForm } from "./LoginForm";

export default {
  title: "Forms/ Login Form",
  component: LoginForm,
  argTypes: {
    onSignInWithProvider: { action: "provider btn clicked" },
    onSignIn: { action: "sign in btn clicked" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const FillForm = Template.bind({});
FillForm.play = async () => {
  const emailInput = screen.getByLabelText("Email", {
    selector: "input",
  });

  await userEvent.type(emailInput, "example-email@email.com", {
    delay: 40,
  });

  const passwordInput = screen.getByLabelText("Password", {
    selector: "input",
  });

  await userEvent.type(passwordInput, "my-fake-password", {
    delay: 40,
  });
};

export const FillFormAndSubmit = Template.bind({});
FillFormAndSubmit.play = async () => {
  await FillForm.play();

  const submitButton = screen.getByText("Sign in");
  await userEvent.click(submitButton);
};

export const ViewFormPassword = Template.bind({});
ViewFormPassword.play = async () => {
  await FillForm.play();

  const showPasswordBtn = screen.getByLabelText("Reveal password");
  await userEvent.click(showPasswordBtn);
};

export const LoginWithProvider = Template.bind({});
LoginWithProvider.play = async () => {
  const ghProviderBtn = screen.getByText(/github/i);
  await userEvent.click(ghProviderBtn);
};

export const ForgotPassword = Template.bind({});
ForgotPassword.play = async () => {
  const forgotPasswordBtn = screen.getByText(/forgot password/i);
  await userEvent.click(forgotPasswordBtn);
};

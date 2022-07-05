import { LoginForm } from "./LoginForm";

export default {
  title: "Forms/ Login Form",
  component: LoginForm,
  argTypes: { onSignInWithProvider: { action: "provider btn clicked" } },
};

export const Basic = (args) => {
  return <LoginForm {...args} />;
};

import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  screen,
  userEvent,
  waitFor,
  fireEvent,
} from "@storybook/testing-library";
import { DonationForm } from "./DonationForm";
import { mockPaymentIntent } from "./mock";

export default {
  title: "Forms/ Donation Form",
  component: DonationForm,
  argTypes: {
    onSignInWithProvider: { action: "provider btn clicked" },
    onSignIn: { action: "sign in btn clicked" },
    // onChangeTip: { action: "tip changed" }
  },
} as ComponentMeta<typeof DonationForm>;

const Template: ComponentStory<typeof DonationForm> = (args) => {
  const [tip, setTip] = useState(undefined);
  return (
    <DonationForm
      {...args}
      paymentIntent={mockPaymentIntent}
      tip={tip}
      onChangeTip={setTip}
    />
  );
};

export const Basic = Template.bind({});

export const ShowTipOptions = Template.bind({});
ShowTipOptions.play = async () => {
  const tipInput = screen.getByTestId("updatetip");
  await userEvent.click(tipInput, {
    delay: 100,
  });
};

export const UpdateTipTo1 = Template.bind({});
UpdateTipTo1.play = async () => {
  await ShowTipOptions.play();

  await new Promise((r) => setTimeout(r, 500));

  const tipOption = screen.getByTestId("option-1");
  await userEvent.click(tipOption);
};

export const FillEmail = Template.bind({});
FillEmail.play = async () => {
  const emailInput = screen.getByLabelText("Email", {
    selector: "input",
  });

  await userEvent.type(emailInput, "valid@email.com", {
    delay: 100,
  });

  emailInput.blur();
};

export const InvalidEmail = Template.bind({});
InvalidEmail.play = async () => {
  const emailInput = screen.getByLabelText("Email", {
    selector: "input",
  });
  await userEvent.type(emailInput, "invalid@email", {
    delay: 100,
  });
  emailInput.blur();
};

export const CreditCardValidation = () =>
  "To Be Done (the credit card field is embedded in an iframe which handles its own validation)";

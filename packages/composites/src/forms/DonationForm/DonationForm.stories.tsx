import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { DonationForm } from "./DonationForm";
import { mockPaymentIntent } from "./mock";

export default {
  title: "Forms/ Donation Form",
  component: DonationForm,
  argTypes: {
    initialNumberOfUnits: {
      name: "initialNumberOfUnits",
      type: { name: "number", required: false },
      defaultValue: 12,
      description: "Initial Number Of Units",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 12 },
      },
      control: {
        type: "number",
      },
    },
  },
} as ComponentMeta<typeof DonationForm>;

const Template: ComponentStory<typeof DonationForm> = ({ initialNumberOfUnits, ...args }) => {
  const [tip, setTip] = useState(undefined);
  const [showCustomInputField, setShowCustomInputField] = useState(false);
  const [numberOfUnits, setNumberOfUnits] = useState(initialNumberOfUnits);
  return (
    <DonationForm
      {...args}
      numberOfUnits={numberOfUnits}
      onChangeCustomInputField={setNumberOfUnits}
      onChangeTip={setTip}
      onCloseCustomInputField={() => setShowCustomInputField(false)}
      onShowCustomInputField={() => setShowCustomInputField(true)}
      paymentIntent={mockPaymentIntent}
      showCustomInputField={showCustomInputField}
      tip={tip}
    />
  );
};

export const Basic = Template.bind({});

export const NoNumberOfUnitsSet = Template.bind({});
NoNumberOfUnitsSet.args = {
  initialNumberOfUnits: null,
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const UpdateNumberOfUnits = Template.bind({});
UpdateNumberOfUnits.play = async () => {
  const updateInputBtn = screen.getByLabelText("edit donation amount");
  await sleep(1000);
  await userEvent.click(updateInputBtn);
  await sleep(1000);
  const addOneBtn = screen.getByRole("spinbutton");
  userEvent.clear(addOneBtn);
  await userEvent.type(addOneBtn, "15", {
    delay: 100,
  });
  await sleep(500);
  const confirmBtn = screen.getByText("Confirm");
  await userEvent.click(confirmBtn);
};

export const UpdateTip = Template.bind({});
UpdateTip.play = async () => {
  await sleep(500);
  const tipInput = screen.getByTestId("updatetip");
  await userEvent.click(tipInput);

  await sleep(500);

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
  "To Be Done (the credit card field is embedded in a stripe iframe which handles its own validation)";

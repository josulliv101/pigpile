import type * as React from "react";
import { Box, Callout, HTMLChakraProps, Stack, Text } from "@josulliv101/core";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentIntent } from "@stripe/stripe-js";
import { getStripe } from "./getStripe";
import { ItemsLabel } from "./ItemsLabel";
import { TipInput } from "./TipInput";
import { TotalLabel } from "./TotalLabel";
import { CreditCardForm } from "./CreditCardForm";

export interface DonationFormProps extends HTMLChakraProps<"div"> {
  paymentIntent: PaymentIntent;
  onChangeTip: () => void;
  onChangeCustomInputField: () => void;
  onCloseCustomInputField?: () => void;
  onShowCustomInputField: () => void;
  onSubmit: () => void;
  numberOfUnits: number | null;
  tip: number;
  showCustomInputField: boolean;
}

export const DonationForm: React.FC<DonationFormProps> = ({
  paymentIntent,
  tip,
  numberOfUnits,
  showCustomInputField: showCustomInputFieldProp,
  onChangeTip,
  onChangeCustomInputField,
  onCloseCustomInputField,
  onShowCustomInputField,
  onSubmit,
  ...props
}) => {
  const showCustomInputField =
    showCustomInputFieldProp || numberOfUnits === null;
  return (
    <Callout as={Stack} spacing="8" {...props}>
      <ItemsLabel
        onCloseCustomInputField={onCloseCustomInputField}
        onShowCustomInputField={onShowCustomInputField}
        onChangeCustomInputField={onChangeCustomInputField}
        numberOfUnits={numberOfUnits}
        label="pairs of socks"
        showCustomInputField={showCustomInputField}
      />
      {numberOfUnits !== null && (
        <Box opacity={showCustomInputField ? 0 : 1}>
          <TipInput
            tip={tip}
            onChange={onChangeTip}
            isDisabled={showCustomInputField}
          />
          <TotalLabel amount={numberOfUnits} tip={tip} />
          {/*<PaymentTabs />*/}
          <Elements
            stripe={getStripe()}
            options={{
              appearance: {
                theme: "night",
                variables: {
                  colorPrimary: "#0570de",
                  colorBackground: "#ffffff",
                  colorText: "#30313d",
                  colorDanger: "#df1b41",
                  fontFamily: "Ideal Sans, system-ui, sans-serif",
                  spacingUnit: "2px",
                  borderRadius: "4px",
                },
              },
              clientSecret: paymentIntent?.client_secret,
            }}
          >
            <CreditCardForm
              showCustomInputField={showCustomInputField}
              paymentIntent={paymentIntent}
              onSubmit={onSubmit}
            />
          </Elements>
        </Box>
      )}
      {numberOfUnits === null && (
        <Text textAlign="center" mt="2" opacity=".8">
          Thank you for supporting this pigpile 🤍
        </Text>
      )}
    </Callout>
  );
};

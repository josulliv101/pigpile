import type * as React from "react";
import { Box, Callout, HTMLChakraProps, Stack } from "@pigpile/core";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentIntent } from "@stripe/stripe-js";
import { getStripe } from "./getStripe";
import { ItemsLabel } from "./ItemsLabel";
import { TipInput } from "./TipInput";
import { TotalLabel } from "./TotalLabel";
import { PaymentTabs } from "./PaymentTabs";
import { CreditCardForm } from "./CreditCardForm";

export interface DonationFormProps extends HTMLChakraProps<"div"> {
  paymentIntent: PaymentIntent;
  onChangeTip: () => void;
  tip: number;
}

export const DonationForm: React.FC<DonationFormProps> = ({
  paymentIntent,
  tip,
  onChangeTip,
  ...props
}) => {
  return (
    <Callout as={Stack} spacing="8" {...props}>
      <ItemsLabel
        onEdit={() => console.log("edit")}
        numberOfUnits={12}
        label="pairs of socks"
      />
      <TipInput tip={tip} onChange={onChangeTip} />
      <TotalLabel amount={12} tip={1} />
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
        <CreditCardForm paymentIntent={paymentIntent} />
      </Elements>
    </Callout>
  );
};

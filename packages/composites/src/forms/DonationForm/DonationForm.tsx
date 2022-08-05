import { useEffect } from "react";
import { Box, Callout, HTMLChakraProps, Stack, Text } from "@josulliv101/core";
import { Elements } from "@stripe/react-stripe-js";
import { ItemsLabel } from "./ItemsLabel";
import { TipInput } from "./TipInput";
import { TotalLabel } from "./TotalLabel";
import { CreditCardForm } from "./CreditCardForm";
import { useStripePaymentIntent } from "./useStripePaymentIntent";

export interface DonationFormProps extends HTMLChakraProps<"div"> {
  onChangeTip: (n: number) => void;
  onChangeCustomInputField: (n: number) => void;
  onCloseCustomInputField?: () => void;
  onShowCustomInputField: () => void;
  onSubmit: () => void;
  numberOfUnits: number | null;
  pricePerUnit: number;
  tip: number;
  showCustomInputField: boolean;
  getLabel: (n: number | null) => string;
}

export const DonationForm: React.FC<DonationFormProps> = ({
  tip,
  numberOfUnits = 1,
  pricePerUnit = 1,
  getLabel,
  showCustomInputField: showCustomInputFieldProp,
  onChangeTip,
  onChangeCustomInputField,
  onCloseCustomInputField,
  onShowCustomInputField,
  onSubmit,
  ...props
}) => {
  const { paymentIntent, stripeObj, setPaymentIntentAmount } =
    useStripePaymentIntent(
      numberOfUnits !== null ? numberOfUnits * pricePerUnit + tip : 0
    );

  const showCustomInputField =
    showCustomInputFieldProp || numberOfUnits === null;

  useEffect(() => {
    if (numberOfUnits) {
      setPaymentIntentAmount(numberOfUnits * pricePerUnit + tip);
    }
  }, [numberOfUnits, pricePerUnit, tip]);
  return (
    <Callout
      as={Stack}
      spacing="8"
      {...props}
    >
      <ItemsLabel
        label={getLabel}
        numberOfUnits={numberOfUnits}
        onChangeCustomInputField={onChangeCustomInputField}
        onCloseCustomInputField={onCloseCustomInputField}
        onShowCustomInputField={onShowCustomInputField}
        pricePerUnit={pricePerUnit}
        showCustomInputField={showCustomInputField}
      />
      {numberOfUnits !== null && (
        <Box opacity={showCustomInputField ? 0 : 1}>
          <TipInput
            isDisabled={showCustomInputField}
            onChange={onChangeTip}
            tip={tip}
          />
          <TotalLabel
            amount={numberOfUnits * pricePerUnit}
            tip={tip}
          />
          <Elements
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
            stripe={stripeObj}
          >
            <CreditCardForm
              onSubmit={onSubmit}
              paymentIntent={paymentIntent}
              showCustomInputField={showCustomInputField}
            />
          </Elements>
        </Box>
      )}
      {numberOfUnits === null && (
        <Text
          mt="2"
          opacity=".8"
          textAlign="center"
        >
          Thank you for supporting this pigpile 🤍
        </Text>
      )}
    </Callout>
  );
};

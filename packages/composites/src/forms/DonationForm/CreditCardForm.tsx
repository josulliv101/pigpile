import { useEffect, useRef, useState } from "react";
import type * as React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  HStack,
  HTMLChakraProps,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Elements,
  useElements,
  CardElement,
  useStripe as useStripeObject,
} from "@stripe/react-stripe-js";
import { PaymentIntent } from "@stripe/stripe-js";
import { Formik, Field, Form } from "formik";
import debounce from "lodash.debounce";
import { getStripe } from "./getStripe";
import { useStripe } from "./useStripe";

export interface CreditCardFormProps extends HTMLChakraProps<"div"> {
  paymentIntent: PaymentIntent;
  showCustomInputField: boolean;
  onSubmit: () => void;
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  currencyAmount,
  numberOfUnits,
  onSubmit,
  paymentIntent,
  showCustomInputField,
  ...props
}) => {
  const stripeDetails = useStripe();
  const stripeObj = useStripeObject();
  const elements = useElements();
  const [validCard, setValidCard] = useState(false);
  const [isCardReady, setIsCardReady] = useState(false);
  const [isCardFocused, setIsCardFocused] = useState(false);
  const [cardApi, setCardApi] = useState(null);

  console.log("stripeDetails", { showCustomInputField }, stripeDetails);

  useEffect(() => {
    if (cardApi?.update) {
      console.log("useEffect", showCustomInputField);
      cardApi.update({ disabled: showCustomInputField });
    }
  }, [showCustomInputField]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    values,
    actions
  ) => {
    console.log("handleSubmit", paymentIntent, values, actions);
    if (!elements || !paymentIntent?.client_secret) return;

    const cardElements = elements.getElement(CardElement);

    const {
      error,
      paymentIntent: confirmPaymentIntent,
      ...rest
    } = await stripeObj.confirmCardPayment(paymentIntent?.client_secret, {
      payment_method: {
        card: cardElements,
      },
    });
    onSubmit({ values, confirmPaymentIntent, error, rest });
    console.log("handle submit", error, confirmPaymentIntent);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!values.email.includes(".com")) {
          errors.email = "Invalid Email Address";
        }
        console.log("validating...", values, errors);
        return errors;
      }}
    >
      {({ dirty, isValid, setStatus, status, ...rest }) => {
        console.log("props", { dirty, isValid, setStatus, status }, rest);
        const handleCardChange = (event) =>
          setStatus({ ...status, ccComplete: event.complete });
        const handleCardBlur = (event) => {
          setStatus({ ...status, userUnfocusedCard: true });
          setIsCardFocused(false);
        };
        const handleCardFocus = (event) => setIsCardFocused(true);
        const handleReady = (cardApi) => {
          console.log("handleReady", cardApi);
          setCardApi(cardApi);
          setIsCardReady(true);
        };
        const isCardInvalid = status?.userUnfocusedCard && !status.ccComplete;
        return (
          <Form>
            <Stack spacing="4" opacity={isCardReady ? 1 : 0}>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    isDisabled={showCustomInputField}
                  >
                    <Input
                      {...field}
                      isRequired
                      id="email"
                      aria-label="Email"
                      placeholder="Email"
                      _placeholder={{ color: "whiteAlpha.800" }}
                      _disabled={{ opacity: 1, cursor: "default" }}
                      // sx={{ cursor: "default" }}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <FormControl isInvalid={isCardInvalid}>
                <Box
                  pl="16px"
                  pr="4px"
                  lineHeight="40px"
                  boxShadow={
                    isCardInvalid
                      ? "0 0 0 1px #e53e3e"
                      : isCardFocused
                      ? "0 0 0 1px #3182ce"
                      : "none"
                  }
                  border={`1px ${
                    isCardInvalid
                      ? "#E53E3E"
                      : isCardFocused
                      ? "#3182ce"
                      : "#e2e8f0"
                  } solid`}
                  borderRadius="md"
                  // cursor="crosshair"
                >
                  <CardElement
                    onFocus={handleCardFocus}
                    onBlur={handleCardBlur}
                    onReady={handleReady}
                    onChange={handleCardChange}
                    options={{
                      iconStyle: "solid",
                      style: {
                        base: {
                          iconColor: "#fff",
                          color: "#fff",
                          fontWeight: 500,
                          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                          fontSize: "16px",
                          fontSmoothing: "antialiased",
                          lineHeight: "40px",
                          ":-webkit-autofill": {
                            color: "#fff",
                          },
                          "::placeholder": {
                            color: "rgba(255,255,255, .7)",
                          },
                        },
                        invalid: {
                          // iconColor: "#ff0000",
                          // color: "#ff0000"
                          color: "#ffffff",
                        },
                      },
                    }}
                  />
                </Box>
                <FormErrorMessage>
                  Credit card information incomplete
                </FormErrorMessage>
              </FormControl>
              <Spacer p="1" />
              <Button
                type="submit"
                variant="solid"
                colorScheme="blue"
                disabled={
                  showCustomInputField ||
                  !dirty ||
                  !isValid ||
                  !status?.ccComplete
                }
              >
                Donate Now
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

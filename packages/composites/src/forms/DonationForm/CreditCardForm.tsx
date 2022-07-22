import { useEffect, useRef, useState } from "react";
import type * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HTMLChakraProps,
  Input,
  Spacer,
  Stack,
  useToast,
} from "@josulliv101/core";
import {
  useElements,
  CardElement,
  useStripe as useStripeObject,
} from "@stripe/react-stripe-js";
// import { PaymentIntent } from "@stripe/stripe-js";
import { Formik, Field, Form } from "formik";
import { useStripePaymentIntent } from "./useStripePaymentIntent";

export interface CreditCardFormProps extends HTMLChakraProps<"div"> {
  paymentIntent: any; // PaymentIntent;
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
  const toast = useToast();
  // const stripeDetails = useStripePaymentIntent();
  const stripeObj = useStripeObject();
  const elements = useElements();
  const [isCardReady, setIsCardReady] = useState(false);
  const [isCardFocused, setIsCardFocused] = useState(false);
  const [cardApi, setCardApi] = useState(null);

  console.log("stripeDetails", { showCustomInputField });

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
    if (process.env.IS_STORYBOOK === true) {
      console.warn("Credit card submission is disabled within Storybook.");
      toast({
        title: "Functionality Disabled",
        description: "Credit card submission is disabled within Storybook.",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    console.log("handleSubmit 1", paymentIntent, values, actions);
    if (!stripeObj || !elements || !paymentIntent?.client_secret) return;

    const cardElements = elements.getElement(CardElement);

    try {
      const {
        error,
        paymentIntent: confirmPaymentIntent,
        ...rest
      } = await stripeObj.confirmCardPayment(paymentIntent?.client_secret, {
        payment_method: {
          card: cardElements,
        },
      });
      console.log("handle submit 2", error, confirmPaymentIntent);
      onSubmit({ values, confirmPaymentIntent, error, rest });
    } catch (error) {
      console.log("error", error);
    }
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
              {!showCustomInputField && <Spacer p="20" />}
              <Button
                type="submit"
                variant="solid"
                colorScheme="pink"
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

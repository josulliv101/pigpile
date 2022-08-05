import { useEffect, useState } from "react";
import {
  useElements,
  CardElement,
  useStripe as useStripeObject,
} from "@stripe/react-stripe-js";
import { Formik, Field, Form } from "formik";
import { PaymentIntent } from "@josulliv101/types";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HTMLChakraProps,
  Input,
  Spacer,
  Stack,
} from "@josulliv101/core";

export interface CreditCardFormProps extends HTMLChakraProps<"div"> {
  paymentIntent: PaymentIntent;
  showCustomInputField: boolean;
  onSubmit: () => void;
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  onSubmit,
  paymentIntent,
  showCustomInputField,
}) => {
  const stripeObj = useStripeObject();
  const elements = useElements();
  const [isCardReady, setIsCardReady] = useState(false);
  const [isCardFocused, setIsCardFocused] = useState(false);
  const [cardApi, setCardApi] = useState(null);

  useEffect(() => {
    if (cardApi?.update) {
      cardApi.update({ disabled: showCustomInputField });
    }
  }, [showCustomInputField]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    values
  ) => {
    if (process.env.IS_STORYBOOK) {
      console.warn("Credit card submission is disabled within Storybook.");
      return;
    }

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
      onSubmit({ values, confirmPaymentIntent, error, rest });
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!values.email.includes(".com")) {
          errors.email = "Invalid Email Address";
        }
        return errors;
      }}
    >
      {({ dirty, isValid, isSubmitting, setStatus, status }) => {
        const handleCardChange = (event) =>
          setStatus({ ...status, ccComplete: event.complete });
        const handleCardBlur = () => {
          setStatus({ ...status, userUnfocusedCard: true });
          setIsCardFocused(false);
        };
        const handleCardFocus = () => setIsCardFocused(true);
        const handleReady = (cardApi) => {
          setCardApi(cardApi);
          setIsCardReady(true);
        };
        const isCardInvalid = status?.userUnfocusedCard && !status.ccComplete;
        return (
          <Form>
            <Stack
              opacity={isCardReady ? 1 : 0}
              spacing="4"
            >
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isDisabled={showCustomInputField}
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <Input
                      {...field}
                      _disabled={{ opacity: 1, cursor: "default" }}
                      _placeholder={{ color: "whiteAlpha.800" }}
                      aria-label="Email"
                      id="email"
                      isRequired
                      placeholder="Email"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <FormControl isInvalid={isCardInvalid}>
                <Box
                  border={`1px ${
                    isCardInvalid
                      ? "#E53E3E"
                      : isCardFocused
                      ? "#3182ce"
                      : "#e2e8f0"
                  } solid`}
                  borderRadius="md"
                  boxShadow={
                    isCardInvalid
                      ? "0 0 0 1px #e53e3e"
                      : isCardFocused
                      ? "0 0 0 1px #3182ce"
                      : "none"
                  }
                  lineHeight="40px"
                  pl="16px"
                  pr="4px"
                >
                  <CardElement
                    onBlur={handleCardBlur}
                    onChange={handleCardChange}
                    onFocus={handleCardFocus}
                    onReady={handleReady}
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
                colorScheme="pink"
                disabled={
                  showCustomInputField ||
                  !dirty ||
                  !isValid ||
                  !status?.ccComplete ||
                  isSubmitting
                }
                isLoading={isSubmitting}
                type="submit"
                variant="solid"
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

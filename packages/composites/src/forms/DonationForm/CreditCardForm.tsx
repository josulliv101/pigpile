import { useEffect, useState } from "react";
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
import {
  useElements,
  CardElement,
  useStripe as useStripeObject,
} from "@stripe/react-stripe-js";
import { Formik, Field, Form } from "formik";

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
    values,
    actions
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
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!values.email.includes(".com")) {
          errors.email = "Invalid Email Address";
        }
        return errors;
      }}
    >
      {({ dirty, isValid, isSubmitting, setStatus, status, ...rest }) => {
        const handleCardChange = (event) =>
          setStatus({ ...status, ccComplete: event.complete });
        const handleCardBlur = (event) => {
          setStatus({ ...status, userUnfocusedCard: true });
          setIsCardFocused(false);
        };
        const handleCardFocus = (event) => setIsCardFocused(true);
        const handleReady = (cardApi) => {
          setCardApi(cardApi);
          setIsCardReady(true);
        };
        const isCardInvalid = status?.userUnfocusedCard && !status.ccComplete;
        return (
          <Form>
            <Stack
              spacing="4"
              opacity={isCardReady ? 1 : 0}
            >
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
                  !status?.ccComplete ||
                  isSubmitting
                }
                isLoading={isSubmitting}
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

import { useState, useEffect } from "react";
import type { Stripe } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";

let stripePromise: Promise<Stripe | null>;

export function useStripePaymentIntent(initialPaymentIntentAmount = 0) {
  const [paymentIntentAmount, setPaymentIntentAmount] = useState(
    initialPaymentIntentAmount
  );
  const [paymentIntent, setPaymentIntentObj] = useState(null);
  const stripeObj = getStripe();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/payment_intents`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ amount: paymentIntentAmount }),
      });

      const json = await response.json();

      setPaymentIntentObj(json);
    };

    if (initialPaymentIntentAmount) {
      fetchData().catch(console.error);
    }
  }, [paymentIntentAmount]);

  return {
    paymentIntentAmount,
    paymentIntent,
    stripeObj,
    setPaymentIntentAmount,
  };
}

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);
  }
  return stripePromise;
};

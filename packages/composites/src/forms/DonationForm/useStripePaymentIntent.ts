import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";

let stripePromise: Promise<Stripe | null>;

export function useStripePaymentIntent() {
  const [paymentIntent, setPaymentIntentObj] = useState(null);
  const [amount, setPaymentIntentAmount] = useState(10);
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
        body: JSON.stringify({ amount }),
      });

      const json = await response.json();

      setPaymentIntentObj(json);
    };

    console.log("FETCHING");
    fetchData().catch(console.error);
  }, []);

  return {
    paymentIntent,
    stripeObj,
    setPaymentIntentAmount,
  };
}

console.log("GET STRIPE IMPORT");
export const getStripe = () => {
  console.log("GET STRIPE FN");
  console.log(
    "process.env.NEXT_PUBLIC_STRIPE_API_KEY",
    process.env.NEXT_PUBLIC_STRIPE_API_KEY
  );
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);
  }
  console.log("return stripePromise", stripePromise);
  return stripePromise;
};

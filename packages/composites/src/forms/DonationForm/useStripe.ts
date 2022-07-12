import { useState, useEffect } from "react";
import { PaymentIntent, Stripe, loadStripe } from "@stripe/stripe-js";
import { fetchPostJSON } from "../../../pages/api/api-helpers";
import * as config from "../../../pages/api/config";

let stripePromise: Promise<Stripe | null> = loadStripe(process.env.API_KEY!);

export function useStripe() {
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(
    null
  );
  /*  useEffect(() => {
    fetchPostJSON(`${process.env.NEXT_PUBLIC_API_URL}/api/payment_intents`, {
      amount: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
    }).then((data) => {
      setPaymentIntent(data)
    })
  }, [])*/

  return {
    stripePromise,
    // paymentIntent
  };
}

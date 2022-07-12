import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  console.log("process.env.API_KEY", JSON.stringify(process.env));
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.API_KEY!);
  }
  return stripePromise;
};

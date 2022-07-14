import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  console.log(
    "process.env.NEXT_PUBLIC_STRIPE_API_KEY",
    process.env.NEXT_PUBLIC_STRIPE_API_KEY
  );
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);
  }
  return stripePromise;
};

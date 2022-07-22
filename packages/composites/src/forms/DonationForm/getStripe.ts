// import { Stripe, loadStripe } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";

let stripePromise: Promise<Stripe | null>;
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
  return stripePromise;
};

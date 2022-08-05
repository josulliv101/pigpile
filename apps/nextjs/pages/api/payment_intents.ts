import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { formatPaymentAmount } from "@josulliv101/formatting";
import { CURRENCY } from "../../config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
  const {
    amount,
    payment_intent_id,
  }: { amount: number; payment_intent_id?: string } = req.body;

  if (!amount || !(amount > 0)) {
    res.status(500).json({ statusCode: 400, message: "Invalid amount." });
    return;
  }

  if (payment_intent_id) {
    try {
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );

      // If PaymentIntent has been created, just update the amount.
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount: formatPaymentAmount(amount),
          }
        );
        res.status(200).json(updated_intent);
        return;
      }
    } catch (e) {
      if ((e as any).code !== "resource_missing") {
        const errorMessage =
          e instanceof Error ? e.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }

  try {
    const params: Stripe.PaymentIntentCreateParams = {
      amount: formatPaymentAmount(amount),
      currency: CURRENCY,
      description: process.env.STRIPE_PAYMENT_DESCRIPTION ?? "",
      automatic_payment_methods: {
        enabled: true,
      },
    };
    const payment_intent: Stripe.PaymentIntent =
      await stripe.paymentIntents.create(params);

    res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
}

const { join } = require("path");
const { firestore, https } = require("firebase-functions");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { adminDb } = require("@josulliv101/connect-admin");
const { default: next } = require("next");

require("firebase-functions/lib/logger/compat");

const nextjsServer = next({
  dev: false,
});

const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});

const endpointSecret = process.env.STRIPE_EVENTS_SIGNING_SECRET;

exports.events = https.onRequest((request, response) => {
  let sig = request.headers["stripe-signature"];

  try {
    let event = stripe.webhooks.constructEvent(
      request.rawBody,
      sig,
      endpointSecret
    );
    return adminDb
      .collection("donations")
      .add(event)
      .then((snapshot) => {
        return response.json({ received: true, ref: snapshot.ref.toString() });
      })
      .catch((err) => {
        return response.status(500).end();
      });
  } catch (err) {
    return response.status(400).end();
  }
});

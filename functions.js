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
  console.log("adminDb keys", Object.keys(adminDb));
  let sig = request.headers["stripe-signature"];

  try {
    console.log("tryinging to validate secret");
    let event = stripe.webhooks.constructEvent(
      request.rawBody,
      sig,
      endpointSecret
    ); // Validate the request
    console.log("validate secret", event);
    return adminDb
      .collection("donations")
      .add(event) // Add the event to the database
      .then((snapshot) => {
        console.log("in snapshot", snapshot);
        // Return a successful response to acknowledge the event was processed successfully
        return response.json({ received: true, ref: snapshot.ref.toString() });
      })
      .catch((err) => {
        console.error(err); // Catch any errors saving to the database
        return response.status(500).end();
      });
  } catch (err) {
    return response.status(400).end(); // Signing signature failure, return an error 400
  }
});

/*exports.exampleDatabaseTrigger = adminDb.collection('donations/{eventId}').onCreate((snapshot, context) => {
  return console.log({
    eventId: context.params.eventId,
    data: snapshot.val()
  });
});*/

exports.exampleDatabaseTrigger = firestore
  .document("donations/{eventId}")
  .onCreate((snapshot, context) => {
    return console.log({
      eventId: context.params.eventId,
      data: snapshot.val(),
    });
  });

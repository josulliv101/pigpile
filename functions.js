const { join } = require("path");
const { https } = require("firebase-functions");
const { default: next } = require("next");
require("firebase-functions/lib/logger/compat");

const nextjsServer = next({
  dev: false,
});

const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});

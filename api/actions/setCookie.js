var admin = require("firebase-admin");
var serviceAccount = require("../../blog-20802-firebase-adminsdk-aq7p4-7d21eb0e69.json");
var cookie = require('cookie');

// Init already happens by loadAuth action
/*admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blog-20802.firebaseio.com/"
});*/

export default function setCookie(req) {

  const {jwt} = req.body;
  console.log('Set Cookie', jwt, typeof jwt, !jwt);

  return new Promise((resolve, reject) => {

    if (!jwt) resolve(getResFunction(jwt, null));

    admin.auth().verifyIdToken(jwt)
      .then(({name, picture, uid}) => {
        const json = uid && {name, picture, uid} || null
        resolve(getResFunction(jwt, json));
      })
      .catch(function(error) {
        reject(error);
      });

  });

}

function getResFunction(jwt, json) {
  console.log('getResFunction', jwt);
  return function(res) {
    return !!jwt
      ? res.type("json").cookie('jwt', jwt, { maxAge: 900000, httpOnly: true, path: '/' }).send(json)
      : res.type("json").cookie('jwt', '', { expires: new Date(0), maxAge: new Date(0), httpOnly: true, path: '/' }).send({user: false})
  }
}
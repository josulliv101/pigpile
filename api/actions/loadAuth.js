var admin = require("firebase-admin");
var serviceAccount = require("../../blog-20802-firebase-adminsdk-aq7p4-7d21eb0e69.json");
var cookie = require('cookie');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blog-20802.firebaseio.com/"
});

export default function loadAuth(req) {

  var {jwt} = req.get('cookie') && cookie.parse(req.get('cookie')) || {};
  console.log('loadAuth: jwt: ', jwt);

  return new Promise((resolve, reject) => {

		if (!jwt)  resolve(null);

    console.log('loadAuth: go ahead and verify: ', jwt);

		admin.auth().verifyIdToken(jwt)
		  .then(({name, picture, uid}) => resolve({name, picture, uid}))
		  .catch((error) => reject(error, "Error validating jwt."));
  });

}

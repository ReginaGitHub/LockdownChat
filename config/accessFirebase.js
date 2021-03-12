var admin = require("firebase-admin");

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lockdownchat-9fbc9-default-rtdb.firebaseio.com"
});


const database = admin.database();

module.exports = database;
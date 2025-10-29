var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.Length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();

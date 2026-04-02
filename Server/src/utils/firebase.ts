import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const localKeyPath = path.join(__dirname, "..", "serviceAccountKey.json");

function getFirebaseCredentials() {
  if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL) {
    return {
      type: process.env.FIREBASE_TYPE || "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      auth_uri: process.env.FIREBASE_AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
      token_uri: process.env.FIREBASE_TOKEN_URI || "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL || "",
    };
  }

  if (fs.existsSync(localKeyPath)) {
    const raw = fs.readFileSync(localKeyPath, "utf8");
    return JSON.parse(raw);
  }

  throw new Error("Firebase credentials missing. Provide serviceAccountKey.json in Server folder or set FIREBASE_* env vars.");
}

const serviceAccount = getFirebaseCredentials();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
export default admin;

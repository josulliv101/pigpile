import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

export const adminApp = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.applicationDefault() })
  : admin.app();

export const adminAuth = adminApp?.auth();

export const adminDb = getFirestore(adminApp);

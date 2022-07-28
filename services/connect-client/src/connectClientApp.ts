import { getApp, getApps, initializeApp, FirebaseApp } from "firebase/app";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";
import { initializeFirestore, Firestore } from "firebase/firestore";
import { User } from "@josulliv101/types";
import { getUser } from "./getUser";

const firebaseConfig = {
  apiKey: "AIzaSyC_oY9QK7-zheXCNQdcU_-LQ37xRiGD-sE",
  authDomain: "fir-abc-a965d.firebaseapp.com",
  projectId: "fir-abc-a965d",
  storageBucket: "fir-abc-a965d.appspot.com",
  messagingSenderId: "360517790730",
  appId: "1:360517790730:web:0488ed0f086ee54e26c3f3",
};

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

const getClientApp = (): FirebaseApp =>
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const connectClientApp = (
  authStateChangedHandler: (user: User) => void
) => {
  app = getClientApp();
  db = initializeFirestore(app, { cacheSizeBytes: 41943048 });
  auth = getAuth(app);

  onAuthStateChanged(auth, async (authUser) => {
    //
    if (!authUser) {
      await signInAnonymously(auth);
    } else {
      const user = await getUser(authUser);
      authStateChangedHandler(user);
    }
  });
};

export { app, db, auth };

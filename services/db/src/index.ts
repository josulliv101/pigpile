import { getApp, getApps, initializeApp } from "firebase/app";
import {
  initializeFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

export const COLLECTION_ID = "campaigns";

const firebaseConfig = {
  apiKey: "AIzaSyC_oY9QK7-zheXCNQdcU_-LQ37xRiGD-sE",
  authDomain: "fir-abc-a965d.firebaseapp.com",
  projectId: "fir-abc-a965d",
  storageBucket: "fir-abc-a965d.appspot.com",
  messagingSenderId: "360517790730",
  appId: "1:360517790730:web:0488ed0f086ee54e26c3f3",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = initializeFirestore(app, { cacheSizeBytes: 41943048 });

export const getDbConnection = () => db;

export async function getCampaignFromDb(docId: string): Promise<any> {
  console.log("GETTING Campaign", docId);
  const docRef = doc(db, COLLECTION_ID, docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return { docId, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return;
  }
}

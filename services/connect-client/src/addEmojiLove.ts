import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
// import { DonationData } from '@pigpile/store'
import { db } from "./connectClientApp";

export const COLLECTION_ID = "campaigns";

export const addEmojiLove = async (data) => {
  const { campaignId, ...payload } = data;
  const coll = collection(db, `${COLLECTION_ID}/${campaignId}/emojilove`);
  const updatedDoc = await setDoc(doc(coll, Date.now().toString()), payload);
  console.log("doc updatedDoc!", updatedDoc);
  return updatedDoc;
};

import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { AddedDonation } from "@josulliv101/types";
import { db } from "./connectClientApp";

export const addDonation = async (addedDonation: AddedDonation) => {
  const { campaignId, ...donation } = addedDonation;

  if (!campaignId) {
    throw new Error("Cannot add donation without a valid campaign id.");
  }

  if (!donation) {
    throw new Error("Cannot add empty donation.");
  }
  const coll = collection(db, `campaigns/${campaignId}/donations`);
  const updatedDoc = await setDoc(doc(coll), {
    ...donation,
    createdAtInMS: Timestamp.now().seconds * 1000,
  });
  return updatedDoc;
};

import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { Donation } from "@josulliv101/types";
import { db } from "./connectClientApp";

type CampaignDonation = Omit<Donation, "createdAt"> & {
  campaignId: string;
};

export const addDonation = async (campaignDonation: CampaignDonation) => {
  const { campaignId, ...donation } = campaignDonation;
  if (!campaignId) {
    throw Error("Cannot add donation without a valid campaign id.");
  }
  if (!donation) {
    throw Error("Cannot add empty donation.");
  }
  const coll = collection(db, `campaigns/${campaignId}/donations`);
  const updatedDoc = await setDoc(doc(coll), {
    ...donation,
    createdAtInMS: Timestamp.now().seconds * 1000,
  });
  console.log("doc updatedDoc!", updatedDoc);
  return updatedDoc;
};

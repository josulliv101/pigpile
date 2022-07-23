import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { Donation } from "@josulliv101/types";
import { db } from "./connectClientApp";

type CampaignDonation = Omit<Donation, "createdAt"> & {
  campaignId: string;
};

export const addDonation = async (campaignDonation: CampaignDonation) => {
  const { campaignId, ...donation } = campaignDonation;
  if (!donation) {
    throw Error("Cannot add empty donation.");
  }
  const coll = collection(db, `campaigns/${campaignId}/donations`);
  const updatedDoc = await setDoc(doc(coll, Date.now().toString()), {
    ...donation,
    createdAt: Timestamp.now(),
  });
  console.log("doc updatedDoc!", updatedDoc);
  return updatedDoc;
};

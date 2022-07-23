import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { Donation } from "@josulliv101/types";
import { db } from "./connectClientApp";

export function subscribeToCampaignDonations(
  campaignId: string,
  onChange: () => void
) {
  const q = query(collection(db, `campaigns/${campaignId}/donations`));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const donations = [] as Donation[];
    querySnapshot.forEach((doc) => {
      console.log("doc", doc.createTime, doc);
      const createdAt = new Date(doc.create_time * 1000);
      donations.push({ id: doc.id, ...doc.data(), createdAt: 123456789 });
    });
    console.log("Current donations: ", donations, q);
    onChange(donations);
  });
  return unsubscribe;
}

/*export function useSubscribeToCampaignDonations(campaignId: string, onChange: () => void) {
  console.log('subscribing', campaignId, onChange)
  useEffect(() => {
    console.log('subscribing db', db)
    if (!db) {
      return () => console.log('unsubscribing', db)
    }
    const q = query(collection(db, `campaigns/${campaignId}/donations`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const donations = [] as Donation[];
      querySnapshot.forEach((doc) => {
        donations.push(doc.data());
      });
      console.log("Current donations: ", donations, q);
      onChange(donations)
    });
    return unsubscribe;
  }, [db]);
}*/

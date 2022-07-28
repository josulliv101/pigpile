import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { Donation } from "@josulliv101/types";
import { db } from "./connectClientApp";

function getOrderBy(queryType: number, isSortDesc: boolean) {
  const sortOrderDirection = isSortDesc ? "desc" : "asc";
  if (queryType) {
    return orderBy("quantity", sortOrderDirection);
  }
  return orderBy("createdAtInMS", sortOrderDirection);
}

export function subscribeToCampaignDonations(
  campaignId: string,
  { queryType, isSortDesc }: { queryType: number; isSortDesc: boolean },
  onChange: () => void
) {
  const q = query(
    collection(db, `campaigns/${campaignId}/donations`),
    getOrderBy(queryType, isSortDesc)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const donations = [] as Donation[];
    querySnapshot.forEach((doc) => {
      console.log("querySnapshot");
      const data = doc.data();
      donations.push({ id: doc.id, ...data });
    });
    console.log("Current donations: ", donations, q);
    onChange(donations);
  });
  return unsubscribe;
}

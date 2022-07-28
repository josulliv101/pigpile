import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
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
  onChange: (d: Donation[]) => void
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
    onChange(donations);
  });
  return unsubscribe;
}

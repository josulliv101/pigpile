import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Donation } from "@josulliv101/types";
import {
  subscribeToCampaignDonations,
  Timestamp,
} from "@josulliv101/connect-client";
import { donationsSlice, selectIsAppReady } from "../store";

export function useFoo(campaignId: string) {
  const dispatch = useDispatch();
  const isAppReady = useSelector(selectIsAppReady());

  useEffect(() => {
    console.log("useFoobar a", isAppReady, campaignId, Timestamp.now());
    if (!isAppReady || !campaignId) {
      return () => console.log("useFoobar b", isAppReady);
    }
    const unsubscribe = subscribeToCampaignDonations(
      campaignId,
      (donations: Donation[]) => {
        dispatch(
          donationsSlice.actions.setCampaignDonations({ campaignId, donations })
        );
      }
    );
    return unsubscribe;
  }, [campaignId, dispatch, isAppReady]);
}

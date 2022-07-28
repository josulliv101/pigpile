import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Donation } from "@josulliv101/types";
import { subscribeToCampaignDonations } from "@josulliv101/connect-client";
import {
  donationsSlice,
  selectIsAppReady,
  selectDonationFilterState,
} from "../store";

export function useDonationsSubscription(campaignId: string) {
  const dispatch = useDispatch();
  const isAppReady = useSelector(selectIsAppReady());
  const { queryType, isSortDesc } = useSelector(selectDonationFilterState());

  useEffect(() => {
    if (!isAppReady || !campaignId) {
      return;
    }
    const unsubscribe = subscribeToCampaignDonations(
      campaignId,
      { queryType, isSortDesc },
      (donations: Donation[]) => {
        dispatch(
          donationsSlice.actions.setCampaignDonations({ campaignId, donations })
        );
      }
    );
    return unsubscribe;
  }, [campaignId, dispatch, isAppReady, queryType, isSortDesc]);
}

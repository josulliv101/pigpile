import { useEffect } from "react";
import { Donation } from "@josulliv101/types";
import { subscribeToCampaignDonations } from "@josulliv101/connect-client";
import { donationsSlice, selectIsAppReady, selectDonationFilterState } from "store";
import { useAppDispatch, useAppSelector } from "hooks";

export function useDonationsSubscription(campaignId: string) {
  const dispatch = useAppDispatch();
  const isAppReady = useAppSelector(selectIsAppReady());
  const { queryType, isSortDesc } = useAppSelector(selectDonationFilterState());

  useEffect(() => {
    if (!isAppReady || !campaignId) {
      return;
    }
    const unsubscribe = subscribeToCampaignDonations(
      campaignId,
      { queryType, isSortDesc },
      (donations: Donation[]) => {
        dispatch(donationsSlice.actions.setCampaignDonations({ campaignId, donations }));
      }
    );
    return unsubscribe;
  }, [campaignId, dispatch, isAppReady, queryType, isSortDesc]);
}

import { useEffect, useRef, useState } from "react";
import { Donation } from "@josulliv101/types";
// import { subscribeToCampaignDonations } from "@josulliv101/connect-client";
import {
  donationsSlice,
  // selectIsAppReady,
  reducerManager,
  selectDonationFilterState,
} from "store";
import { useAppDispatch, useAppSelector } from "hooks";

export function useDonationsSubscription(campaignId: string) {
  const [isSubscriptionReady, setIsSubscriptionReady] = useState(false);
  let selectCampaignDonations = () => () => [];
  const ref = useRef(() => () => []);
  console.log('ref', ref)
  const dispatch = useAppDispatch();
  // const isAppReady = useAppSelector(selectIsAppReady());
  const { queryType, isSortDesc } = useAppSelector(selectDonationFilterState());

  let unsubscribe = () => '';
  useEffect(() => {
    if (isSubscriptionReady) { // !isAppReady || !campaignId
      return;
    }

    async function fetchImports() {
      const { connectClientApp, subscribeToCampaignDonations } = await import('@josulliv101/connect-client');
      const { donationsSlice, selectCampaignDonations: foo } = await import('store/donationsSlice')
      console.log('connect', subscribeToCampaignDonations, { foo }, donationsSlice);
      reducerManager.add(donationsSlice.name, donationsSlice.reducer)

      connectClientApp(() => '')
      unsubscribe = subscribeToCampaignDonations(
        campaignId,
        { queryType, isSortDesc },
        (donations: Donation[]) => {
          dispatch(
            donationsSlice.actions.setCampaignDonations({ campaignId, donations })
          );
        }
      );
      ref.current = foo
    }
    fetchImports()

    return unsubscribe;
  }, [campaignId, dispatch, /*isAppReady,*/ queryType, isSortDesc, isSubscriptionReady]);

  return { selectCampaignDonations: ref.current }
}

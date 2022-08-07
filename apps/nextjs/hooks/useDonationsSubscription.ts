import { useEffect, useRef } from "react";
import { Donation } from "@josulliv101/types";
import { reducerManager, selectDonationFilterState } from "store";
import { useAppDispatch, useAppSelector } from "hooks";

export function useDonationsSubscription(campaignId: string) {
  const ref = useRef(() => () => []);
  const dispatch = useAppDispatch();
  const { queryType, isSortDesc } = useAppSelector(selectDonationFilterState());

  let unsubscribe = () => "";
  useEffect(() => {
    async function fetchImports() {
      const { connectClientApp, subscribeToCampaignDonations } = await import(
        "@josulliv101/connect-client"
      );
      const { donationsSlice, selectCampaignDonations } = await import("store/donationsSlice");

      reducerManager.add(donationsSlice.name, donationsSlice.reducer);
      connectClientApp(() => "");
      unsubscribe = subscribeToCampaignDonations(
        campaignId,
        { queryType, isSortDesc },
        (donations: Donation[]) => {
          dispatch(
            donationsSlice.actions.setCampaignDonations({
              campaignId,
              donations,
            })
          );
        }
      );
      ref.current = selectCampaignDonations;
    }
    fetchImports();

    return unsubscribe;
  }, [campaignId, dispatch, queryType, isSortDesc]);

  return { selectCampaignDonations: ref.current };
}

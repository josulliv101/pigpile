import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddedDonation, Donation } from "@josulliv101/types";
import { addDonation } from "@josulliv101/connect-client";
import { AppState, Status, statusSlice } from "./store";

const getStatusFromError = (error: unknown): Status => {
  return {
    title: "Error",
    description: error ? error?.message : "An unknown issue has occured.",
    status: "error",
    isClosable: true,
  };
};

export const addCampaignDonationThunk = createAsyncThunk(
  "donation/add",
  async (donation: AddedDonation, { dispatch }) => {
    try {
      await addDonation(donation);
    } catch(err) {
      dispatch(statusSlice.actions.setStatus(getStatusFromError(err)));
    }
  }
);

export const donationsSlice = createSlice({
  name: "donations",

  initialState: {} as Record<string, Donation[]>,

  reducers: {
    setCampaignDonations: (
      state,
      action: PayloadAction<{ campaignId: string; donations: Donation[] }>
    ) => {
      state[action.payload.campaignId] = action.payload.donations;
    },
  },
});

export const selectCampaignDonations =
  (campaignId: string) => (state: AppState) =>
    state[donationsSlice.name][campaignId];

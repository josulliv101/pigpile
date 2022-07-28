import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddedDonation, Donation } from "@josulliv101/types";
import { addDonation } from "@josulliv101/connect-client";
import { AppState } from "./store";

export const addCampaignDonationThunk = createAsyncThunk(
  "donation/add",
  async (donation: AddedDonation) => {
    await addDonation(donation);
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

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Donation } from "@josulliv101/types";
import { addDonation } from "@josulliv101/connect-client";
import { AppState } from "./store";

type CampaignDonation = Omit<Donation, "createdAtInMS"> & {
  campaignId: string;
};

export const addCampaignDonation = createAsyncThunk(
  "donation/add",
  async (campaignDonation: CampaignDonation) => {
    console.log("addCampaignDonation", campaignDonation);
    const data = await addDonation(campaignDonation);
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
      return {
        ...state,
        [action.payload.campaignId]: action.payload.donations,
      };
    },
  },

  extraReducers: {},
});

export const selectCampaignDonations =
  (campaignId: string) => (state: AppState) =>
    state[donationsSlice.name][campaignId];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Campaign } from "@josulliv101/types";
import { AppState } from "./store";

export const campaignsSlice = createSlice({
  name: "campaigns",

  initialState: {} as Record<string, Campaign>,

  reducers: {
    setCampaign(state, action) {
      return {
        ...state,
        [action.payload?.id as string]: action.payload,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<Record<string, Campaign>>) => {
      return {
        ...state,
        ...action.payload.campaigns,
      };
    },
  },
});

export const selectCampaign = (id: string) => (state: AppState) =>
  state[campaignsSlice.name][id];

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Campaign } from "@pigpile/types";
import { AppState, AppThunk } from "./store";

export const campaignsSlice = createSlice({
  name: "campaigns",

  initialState: {} as Record<string, Campaign>,

  reducers: {
    setCampaign(state, action) {
      console.log("setCampaign", action);
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("campaign HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.campaigns,
      };
    },
  },
});

export const fetchCampaign =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(
      campaignsSlice.actions.setCampaign({
        [id]: {},
      })
    );
  };

export const selectCampaign = (id: string) => (state: AppState) =>
  state?.[campaignsSlice.name]?.[id];

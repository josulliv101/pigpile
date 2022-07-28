import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export enum QUERY_TYPE {
  Latest = 0,
  Top = 1,
}

export const donationFilterSlice = createSlice({
  name: "donationFilter",

  initialState: {
    queryType: QUERY_TYPE.Latest,
    isSortDesc: true,
  },

  reducers: {
    setState(state, action) {
      console.log("donationFilterSlice set", action);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectDonationFilterState = () => (state: AppState) =>
  state[donationFilterSlice.name];

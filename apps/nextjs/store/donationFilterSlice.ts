import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

export enum QUERY_TYPE {
  Latest = 0,
  Top = 1,
}

export interface DonationFilterState {
  queryType: QUERY_TYPE;
  isSortDesc: boolean;
}

export const donationFilterSlice = createSlice({
  name: "donationFilter",

  initialState: {
    queryType: QUERY_TYPE.Latest,
    isSortDesc: true,
  } as DonationFilterState,

  reducers: {
    setState(state, action: PayloadAction<Partial<DonationFilterState>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectDonationFilterState = () => (state: AppState) =>
  state[donationFilterSlice.name];

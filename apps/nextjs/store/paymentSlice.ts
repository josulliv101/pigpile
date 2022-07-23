import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChesterAnimations } from "@josulliv101/core";
import { ColorScheme, DEFAULT_COLOR_SCHEME_ID } from "@josulliv101/theme";
import {
  addEmojiLove,
  subscribeToCampaignDonations,
} from "@josulliv101/connect-client";
import { AppState } from "./store";

export enum FORM_STEPS {
  Donate = "donate",
  AdditionalInfo = "additional_info",
}

export const completeDonation = createAsyncThunk(
  "payment/complete",
  async (emojilove: {
    campaignId: string;
    displayName: string;
    emoji: string;
  }) => {
    console.log("@@@signInUser args@@@", emojilove);
    if (!emojilove?.displayName || !emojilove?.emoji) {
      return console.warn("no emoji love found");
    }
    try {
      const data = await addEmojiLove(emojilove);
      console.log("emoji love data", data);
    } catch (error) {
      return error;
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",

  initialState: {
    activeFormStep: FORM_STEPS.Donate,
    error: "",
  },

  reducers: {
    setActiveFormStep: (state, action: PayloadAction<FORM_STEPS>) => {
      state.activeFormStep = action.payload;
      return state;
    },
  },

  extraReducers: {},
});

export const selectPaymentState = () => (state: AppState) =>
  state[paymentSlice.name];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

export enum FORM_STEPS {
  Donate = "donate",
  AdditionalInfo = "additional_info",
}

export interface DonationStepsState {
  activeFormStep: string;
  error: string;
}

export const donationStepsSlice = createSlice({
  name: "donationSteps",

  initialState: {
    activeFormStep: FORM_STEPS.Donate,
    error: "",
  } as DonationStepsState,

  reducers: {
    setActiveFormStep: (state, action: PayloadAction<FORM_STEPS>) => {
      state.activeFormStep = action.payload;
    },
  },
});

export const selectDonationSteps = () => (state: AppState) => state[donationStepsSlice.name];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "@josulliv101/types";
import { AppState } from "store"; // addCampaignDonationThunk,

/*const getStatusFromError = (error: unknown): Status => {
  return {
    title: "Error",
    description: error ? error?.message : "An unspecified issue has occured.",
    status: "error",
    isClosable: true,
  };
};*/

export const statusSlice = createSlice({
  name: "status",

  initialState: {} as Record<string, Status | undefined>,

  reducers: {
    setStatus(state, action: PayloadAction<Status>) {
      state[action.payload.id] = action.payload;
    },
    removeStatus(state, action: PayloadAction<string>) {
      state[action.payload] = undefined;
    },
  },
  /*  extraReducers: (builder) => {
    builder.addCase(addCampaignDonationThunk.rejected, (state, action) => {
      const status = getStatusFromError(action.error);
      state[action.payload.id] = { id: action.payload.id, ...status };
    });
  },*/
});

export const selectStatuses = () => (state: AppState) => state[statusSlice.name];

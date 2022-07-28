import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "@josulliv101/types";
import { AppState } from "./store";

export const statusSlice = createSlice({
  name: "status",

  initialState: {} as Record<string, Status>,

  reducers: {
    setStatus(state, action) {
      state[action.payload.id] = action.payload;
    },
    removeStatus(state, action) {
      console.log("removeStatus", action);
      state[action.payload] = undefined;
    },
  },
});

export const selectStatuses = () => (state: AppState) =>
  state[statusSlice.name];

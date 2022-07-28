import { useEffect } from "react";
import {
  ActionCreatorWithPayload,
  isAnyOf,
  isAsyncThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useToast } from "@josulliv101/core";
import { Status } from "@josulliv101/types";
import {
  listenerMiddleware,
  statusSlice,
  addCampaignDonationThunk,
} from "store";

function getStatusPayloadFromAction(
  action: ActionCreatorWithPayload<Status | { message: string }>
) {
  if (action?.error) {
    return {
      id: action.payload.id,
      title: "Error",
      description: action.error?.message || "An unspecified issue has occured.",
      status: "error",
    };
  }
  return action.payload;
}

export function useStatusManager() {
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useStatusManager add listener: ");
    const effect = async (action) => {
      console.log("Middleware: ", action);
      if (action.type === "status/setStatus" || action.error) {
        toast({
          ...getStatusPayloadFromAction(action),
          isClosable: true,
          onCloseComplete: () => {
            dispatch(statusSlice.actions.removeStatus(action.payload.id));
          },
        });
      }
    };
    listenerMiddleware.startListening({
      matcher: isAnyOf(
        statusSlice.actions.setStatus,
        isAsyncThunkAction(addCampaignDonationThunk)
      ),
      effect,
    });
    return () => {
      console.log("useStatusManager remove listener: ");
      listenerMiddleware.clearListeners();
    };
  }, []);
  return {};
}

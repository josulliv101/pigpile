import { useEffect } from "react";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithOptionalPayload,
  isAnyOf,
  // isAsyncThunkAction,
} from "@reduxjs/toolkit";
import { useToast } from "@josulliv101/core";
import { Status } from "@josulliv101/types";
import {
  listenerMiddleware,
  statusSlice,
  // addCampaignDonationThunk,
} from "store";
import { useAppDispatch } from "hooks";

function getStatusPayloadFromAction(
  action: ActionCreatorWithPayload<Status, string>
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

export function useStatusListenererMiddleware() {
  const toast = useToast();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const effect = async (
      action: ActionCreatorWithOptionalPayload<Status, string>
    ) => {
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
        // isAsyncThunkAction(addCampaignDonationThunk)
      ),
      effect,
    });
    return () => {
      listenerMiddleware.clearListeners();
    };
  }, []);
  return {};
}

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@josulliv101/core";
import { listenerMiddleware, statusSlice } from "store";

export function useStatusManager() {
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useStatusManager/useEffect");
    const effect = async (action) => {
      console.log("Middleware: ", action);
      toast({
        ...action.payload,
        onCloseComplete: () => {
          console.log("CLOSE", action);
          dispatch(statusSlice.actions.removeStatus(action.payload.id));
        },
      });
    };
    listenerMiddleware.startListening({
      actionCreator: statusSlice.actions.setStatus,
      effect,
    });
    return () => {
      // listenerMiddleware.stopListening({ actionCreator: statusSlice.actions.setStatus, effect });
      listenerMiddleware.clearListeners();
    };
  }, []);
  return {};
}

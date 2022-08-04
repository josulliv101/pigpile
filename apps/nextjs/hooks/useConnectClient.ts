import { useCallback, useEffect } from "react";
import { User } from "@josulliv101/types";
import { connectClientApp } from "@josulliv101/connect-client";
import { authSlice, statusSlice } from "store";
import { useAppDispatch } from "hooks";

export function useConnectClient() {
  const dispatch = useAppDispatch();

  const onAuthStateChanged = useCallback(
    (user: User) => dispatch(authSlice.actions.autheniticate(user)),
    [dispatch]
  );

  useEffect(() => {
    try {
      connectClientApp(onAuthStateChanged);
    } catch (error: unknown) {
      const errorMsg = getErrorMessage(error);
      dispatch(
        statusSlice.actions.setStatus({
          title: "Error Connecting",
          description: errorMsg,
          status: "error",
        })
      );
    }
  }, [dispatch]);
}

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

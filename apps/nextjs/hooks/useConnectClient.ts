import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "@josulliv101/types";
import { connectClientApp } from "@josulliv101/connect-client";
import { authSlice, statusSlice } from "../store";

export function useConnectClient() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onAuthStateChanged = useCallback(
    (user: User) => dispatch(authSlice.actions.autheniticate(user)),
    [dispatch]
  );

  useEffect(() => {
    try {
      connectClientApp(onAuthStateChanged);
    } catch (error: unknown) {
      const msg = getErrorMessage(error);
      dispatch(
        statusSlice.actions.setStatus({
          title: "Error Connecting",
          description: "Issue connecting to services.",
          type: "error",
        })
      );
    }
  }, [dispatch]);

  return {
    error,
  };
}

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

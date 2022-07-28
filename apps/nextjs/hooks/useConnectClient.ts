import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "@josulliv101/types";
import { connectClientApp } from "@josulliv101/connect-client";
import { authSlice } from "../store";

export function useConnectClient() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onAuthStateChanged = useCallback(
    (user: User) => dispatch(authSlice.actions.autheniticate(user)),
    [dispatch]
  );

  console.log("useConnectClient RENDER", { error });
  useEffect(() => {
    console.log("useConnectClient useEffect");
    try {
      connectClientApp(onAuthStateChanged);
    } catch (error: unknown) {
      const msg = getErrorMessage(error);
      console.log("ERROR", msg);
      setError(msg);
    }
  }, [dispatch]);

  return {
    error,
  };
}

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);
